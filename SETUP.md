# Jarvis Voice Assistant Setup and Documentation

## Introduction
Jarvis is a personal voice assistant developed using the Jovo Framework. It supports multiple platforms, integrates with browsers without API keys for services from OpenAI, Google, and Microsoft, and supports multiple languages with a focus on Telugu. Jarvis includes advanced voice recognition and command execution capabilities, auto-update and auto-upgrade features, and ensures user privacy and security.

## Prerequisites
Before setting up Jarvis, ensure you have the following software and tools installed:
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Git

## Installation
Follow these steps to clone the repository, install dependencies, and set up the environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/jovotech/jovo-sample-voice-app-nodejs.git
   cd jovo-sample-voice-app-nodejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Configuration
Configure the Jarvis voice assistant by setting up language models and integrating with various services:

1. Language Models:
   - The language model files for English (`en.json`) and Telugu (`te.json`) are located in the `/models` directory.
   - Define intents and their corresponding phrases in these files to enable Jarvis to recognize and respond to user commands.

2. Integrations:
   - Jarvis integrates with browsers without using API keys for services from OpenAI, Google, and Microsoft.
   - Ensure that the necessary browser drivers (e.g., ChromeDriver, EdgeDriver) are installed and available in your system's PATH.

## Running Jarvis
Start the server and interact with the voice assistant:

1. Start the server in development mode:
   ```bash
   npm run start:dev
   ```

2. Access the webhook URL to send requests to Jarvis:
   - Open a browser and navigate to `http://localhost:3000/webhook`.

## Troubleshooting
Common issues and their solutions:

1. Port 3000 is already in use:
   - Check for any running processes using port 3000 and terminate them:
     ```bash
     lsof -i :3000
     kill <PID>
     ```

2. 500 Server Error with message "No registered platform can handle the request":
   - Ensure that the 'platform' property is correctly set in the request object.
   - Verify that the intent handlers in `JarvisComponent.ts` are correctly set up and being triggered.

## Advanced Configuration
Customize Jarvis by adding new intents and languages:

1. Adding New Intents:
   - Define new intents in the language model files (`en.json`, `te.json`).
   - Implement corresponding intent handlers in `JarvisComponent.ts`.

2. Adding New Languages:
   - Create new language model files for the desired languages in the `/models` directory.
   - Update the Jovo app configuration in `app.ts` to include the new languages.

## Security and Privacy
Measures taken to ensure user privacy and security:

1. Data Encryption:
   - Sensitive data is encrypted to protect user privacy.

2. Access Control:
   - Implement robust access control mechanisms to prevent unauthorized access to user data.

## Packaging and Distribution
Steps to package Jarvis as `.deb`, `.apk`, and `.exe` files for distribution:

1. Package as `.deb` (Debian package):
   - Use a tool like `dpkg-deb` to create a Debian package.

2. Package as `.apk` (Android package):
   - Use Android development tools to create an APK file.

3. Package as `.exe` (Windows executable):
   - Use a tool like `electron-builder` to create a Windows executable.

## Contribution
Guidelines for contributing to the Jarvis project:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write clear and concise commit messages.
3. Ensure that your code follows the project's coding standards.
4. Submit a pull request with a detailed description of your changes.

Thank you for using Jarvis! If you have any questions or need further assistance, feel free to reach out.
