import { ExpressJs, Request, Response, Webhook } from '@jovotech/server-express';
import { app } from './app';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';

/*
|--------------------------------------------------------------------------
| EXPRESS SERVER CONFIGURATION
|--------------------------------------------------------------------------
|
| Creates a new express app instance, default for local development
| Learn more here: www.jovo.tech/docs/server/express
|
*/
const port = parseInt(process.env.JOVO_PORT || '3000', 10);
const logFilePath = path.join(__dirname, '../logs/server.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

const logToFile = (message: string) => {
  logStream.write(`${new Date().toISOString()} - ${message}\n`);
};

(async () => {
  if (process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID) {
    return;
  }

  await app.initialize();
  Webhook.use(bodyParser.json()); // Add body-parser middleware to parse JSON payloads

  Webhook.get('/webhook', async (req: Request, res: Response) => {
    const logMessage = `Incoming GET request: ${JSON.stringify(req.query)}`;
    console.log(logMessage);
    logToFile(logMessage);
    // Create a new object to mimic the structure of a POST request body
    const requestBody = {
      version: '4.0',
      context: {
        platform: 'core',
      },
      input: req.query,
    };
    console.log('Modified request object:', requestBody);
    try {
      // Process the request using the modified requestBody
      req.body = requestBody;
      const response = await app.handle(new ExpressJs(req, res));
      console.log(
        'Response object immediately after app.handle:',
        JSON.stringify(response, null, 2),
      );
      const responseLogMessage = `Response from Jovo app (GET): ${JSON.stringify(response)}`;
      console.log(responseLogMessage);
      logToFile(responseLogMessage);
      res.json(response);
    } catch (error) {
      const errorMessage = `Error processing GET request: ${(error as Error).message}`;
      console.error(errorMessage);
      logToFile(errorMessage);
      res.status(500).json({ error: errorMessage });
    }
  });

  Webhook.post('/webhook', async (req: Request, res: Response) => {
    const incomingPostLogMessage = `Incoming POST request: ${JSON.stringify(req.body)}`;
    console.log(incomingPostLogMessage);
    logToFile(incomingPostLogMessage);
    console.log('Full request object:', req.body);
    // Ensure the platform property is set to 'core' within the context object
    req.body.context = req.body.context || {};
    req.body.context.platform = 'core';
    console.log('Modified request object:', req.body);
    try {
      const response = await app.handle(new ExpressJs(req, res));
      console.log(
        'Response object immediately after app.handle:',
        JSON.stringify(response, null, 2),
      );
      const responseLogMessage = `Response from Jovo app (POST): ${JSON.stringify(response)}`;
      console.log(responseLogMessage);
      logToFile(responseLogMessage);
      console.log('Response object before sending to client:', JSON.stringify(response, null, 2));
      res.json(response);
    } catch (error) {
      const errorMessage = `Error processing POST request: ${(error as Error).message}`;
      console.error(errorMessage);
      logToFile(errorMessage);
      res.status(500).json({ error: errorMessage });
    }
  });

  // Add route for Jovo Debugger
  Webhook.get('/debugger', async (req: Request, res: Response) => {
    const logMessage = `Incoming request to /debugger: ${JSON.stringify(req.query)}`;
    console.log(logMessage);
    logToFile(logMessage);
    console.log('Full request object:', req);
    try {
      const response = await app.handle(new ExpressJs(req, res));
      const responseLogMessage = `Response from Jovo app (Debugger): ${JSON.stringify(response)}`;
      console.log(responseLogMessage);
      logToFile(responseLogMessage);
      res.json(response);
    } catch (error) {
      const errorMessage = `Error processing Debugger request: ${(error as Error).message}`;
      console.error(errorMessage);
      logToFile(errorMessage);
      res.status(500).json({ error: errorMessage });
    }
  });

  Webhook.listen(port, '0.0.0.0', () => {
    const logMessage = `Local server listening on port ${port}.`;
    console.info(logMessage);
    logToFile(logMessage);
  });
})();
