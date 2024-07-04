import { App } from "@jovotech/framework";
import { MetadataStorage } from "@jovotech/framework/dist/cjs/metadata/MetadataStorage";
import { AlexaPlatform } from "@jovotech/platform-alexa";
import { GoogleAssistantPlatform } from "@jovotech/platform-googleassistant";
import { JovoDebugger } from "@jovotech/plugin-debugger";
import { CorePlatform } from "@jovotech/platform-core";
import { NlpjsNlu } from "@jovotech/nlu-nlpjs";
import { LangEn } from "@nlpjs/lang-en";

import { JarvisComponent } from "./components/JarvisComponent";

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
const app = new App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [JarvisComponent],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/marketplace
  |
  */
  plugins: [
    new AlexaPlatform({
      intentMap: { "AMAZON.StopIntent": "END", "AMAZON.CancelIntent": "END" },
    }),
    new GoogleAssistantPlatform(),
    new CorePlatform({
      plugins: [
        new NlpjsNlu({
          languageMap: {
            en: LangEn,
            te: "te", // Use "te" locale directly
          },
        }),
      ],
    }),
    new JovoDebugger({
      webhookUrl: "http://localhost:3000/webhook",
    }),
  ],

  /*
  |--------------------------------------------------------------------------
  | Other options
  |--------------------------------------------------------------------------
  |
  | Includes all other configuration options like logging
  | Learn more here: www.jovo.tech/docs/app-config
  |
  */
  logging: true,

  /*
  |--------------------------------------------------------------------------
  | Language and Locale Configuration
  |--------------------------------------------------------------------------
  |
  | Configuration for handling multiple languages and locales
  | Learn more here: www.jovo.tech/docs/multi-language
  |
  */
  languageModel: {
    en: require("../models/en.json"),
    te: require("../models/te.json"),
  },
});

app.hook("before.request", (handleRequest) => {
  console.log(
    "Incoming request:",
    JSON.stringify(handleRequest.$server.getRequestObject(), null, 2)
  );
});

app.hook("after.router", (handleRequest) => {
  console.log("Matched route:", handleRequest.$route);
  if (handleRequest.$route) {
    console.log("Route matches:", handleRequest.$route.matches);
  } else {
    console.log("No route matches found.");
  }
  console.log("State stack:", handleRequest.$state);
  console.log(
    "Full handleRequest object:",
    JSON.stringify(handleRequest, null, 2)
  );
  const metadataStorage = MetadataStorage.getInstance();
  console.log("Handler metadata:", metadataStorage.handlerMetadata);
  console.log("Component metadata:", metadataStorage.componentMetadata);
});

app.hook("after.platform.init", (handleRequest) => {
  console.log("Registered components:", handleRequest.$app.components);
  const routerPlugin = (
    handleRequest.$app.$plugins as unknown as {
      RouterPlugin: { metadataStorage: InstanceType<typeof MetadataStorage> };
    }
  ).RouterPlugin;
  console.log(
    "Handler metadata:",
    routerPlugin.metadataStorage.handlerMetadata
  );
  console.log(
    "Component metadata:",
    routerPlugin.metadataStorage.componentMetadata
  );

  console.log(
    "Registered platforms after init:",
    handleRequest.$app.$platforms
  );

  console.log(
    "Request object after platform init:",
    JSON.stringify(handleRequest.$request, null, 2)
  );
});

app.hook("after.request", (handleRequest) => {
  const metadataStorage = MetadataStorage.getInstance();
  console.log("Handler metadata:", metadataStorage.handlerMetadata);
  console.log("Component metadata:", metadataStorage.componentMetadata);
  console.log(
    "Response object:",
    JSON.stringify(handleRequest.$response, null, 2)
  );
  console.log(
    "Full handleRequest object after request:",
    JSON.stringify(handleRequest, null, 2)
  );
  console.log("Request state after processing:", handleRequest.$state);
  console.log("Request input after processing:", handleRequest.$input);
});

// Additional logging to debug platform matching
app.hook("before.platform.init", (handleRequest) => {
  console.log(
    "Before platform init:",
    JSON.stringify(handleRequest.$server.getRequestObject(), null, 2)
  );

  console.log(
    "Registered platforms before init:",
    handleRequest.$app.$platforms
  );

  console.log(
    "Request object before platform init:",
    JSON.stringify(handleRequest.$request, null, 2)
  );
});

app.hook("after.platform.output", (handleRequest) => {
  console.log(
    "After platform output:",
    JSON.stringify(handleRequest.$response, null, 2)
  );
});

// Error handling hook
app.onError((error: Error, jovo) => {
  console.error("Error occurred:", error);
  if (jovo) {
    console.error("Jovo instance:", JSON.stringify(jovo, null, 2));
    console.error("Request object:", JSON.stringify(jovo.$request, null, 2));
    console.error("Response object:", JSON.stringify(jovo.$response, null, 2));
    console.error("State stack:", jovo.$state);
    console.error("Input object:", JSON.stringify(jovo.$input, null, 2));
    console.error("Session data:", JSON.stringify(jovo.$session, null, 2));
    console.error("User data:", JSON.stringify(jovo.$user, null, 2));
  }
});

export { app };
