interface ResponseObject {
  message: string;
}

import { BaseComponent } from "@jovotech/framework";
import { exec } from "child_process";
import {
  getServerList,
  selectServer,
  fetchRadioStations,
} from "../radio_browser_service";
import { Handle } from "@jovotech/framework";

export class JarvisComponent extends BaseComponent {
  sendCustomResponse(response: ResponseObject) {
    this.$output.push({
      message: response.message,
    });
    return this.$resolve("output");
  }

  @Handle({
    intents: ["SetReminderIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  SetReminderIntent() {
    console.log("SetReminderIntent handler invoked");
    console.log("Current state stack:", this.$state);
    console.log(
      "Incoming request object:",
      JSON.stringify(this.$request, null, 2)
    );
    try {
      const response = { message: "Reminder has been set!" };
      console.log("Response object before sending:", response);
      return this.sendCustomResponse(response);
    } catch (error) {
      console.error(`Error in SetReminderIntent: ${(error as Error).message}`);
      return this.sendCustomResponse({
        message: "Sorry, there was an error setting the reminder.",
      });
    }
  }

  @Handle({
    intents: ["CheckWeatherIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  async CheckWeatherIntent() {
    console.log("CheckWeatherIntent handler invoked");
    console.log("Current state stack:", this.$state);
    console.log(
      "Incoming request object:",
      JSON.stringify(this.$request, null, 2)
    );

    const locationEntity = this.$entities.location as {
      latitude: string;
      longitude: string;
    };
    const latitude = locationEntity && locationEntity.latitude
        ? locationEntity.latitude
        : "48.8566"; // Default latitude
    const longitude = locationEntity && locationEntity.longitude
        ? locationEntity.longitude
        : "2.3522"; // Default longitude

    if (!latitude || !longitude) {
      return this.sendCustomResponse({
        message: "Sorry, I could not extract the location from the request.",
      });
    }

    console.log("Extracted latitude:", latitude);
    console.log("Extracted longitude:", longitude);

    try {
      const { stdout } = await exec(
        `./weather_service.sh ${latitude} ${longitude}`
      );
      const response = { message: `Weather information: ${stdout}` };
      console.log("Response object before sending:", response);
      return this.sendCustomResponse(response);
    } catch (error) {
      console.error(
        `Error executing weather_service.sh: ${(error as Error).message}`
      );
      return this.sendCustomResponse({
        message:
          "Sorry, I could not fetch the weather information at the moment.",
      });
    }
  }

  @Handle({
    intents: ["PlayMusicIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  async PlayMusicIntent() {
    console.log("PlayMusicIntent handler invoked");
    console.log("Current state stack:", this.$state);
    console.log(
      "Incoming request object:",
      JSON.stringify(this.$request, null, 2)
    );

    try {
      const servers = await getServerList();
      const selectedServer = selectServer(servers);
      console.log("Selected server:", selectedServer);

      const stations = await fetchRadioStations(selectedServer);
      if (stations.length > 0) {
        const station = stations[0]; // Select the first station for simplicity
        console.log("Playing station:", station.name);
        console.log(`Stream URL: ${station.url}`);
        // Promisify exec function
        await new Promise<void>((resolve, reject) => {
          exec(`mpg123 ${station.url}`, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
        const response = { message: `Now playing: ${station.name}` };
        console.log("Response object before sending:", response);
        return this.sendCustomResponse(response);
      } else {
        return this.sendCustomResponse({
          message: "No radio stations available at the moment.",
        });
      }
    } catch (error) {
      console.error(`Error playing music: ${(error as Error).message}`);
      return this.sendCustomResponse({
        message: "Sorry, I could not play the music at the moment.",
      });
    }
  }

  @Handle({
    intents: ["AnswerQuestionIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  AnswerQuestionIntent() {
    console.log("AnswerQuestionIntent handler invoked");
    console.log("Current state stack:", this.$state);
    console.log(
      "Incoming request object:",
      JSON.stringify(this.$request, null, 2)
    );
    try {
      const response = { message: "The capital of France is Paris." };
      console.log("Response object before sending:", response);
      return this.sendCustomResponse(response);
    } catch (error) {
      console.error(
        `Error in AnswerQuestionIntent: ${(error as Error).message}`
      );
      return this.sendCustomResponse({
        message: "Sorry, there was an error answering the question.",
      });
    }
  }

  @Handle({
    intents: ["OpenBrowserIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  async OpenBrowserIntent() {
    console.log("OpenBrowserIntent handler invoked");
    console.log("Current state stack:", this.$state);
    console.log(
      "Incoming request object:",
      JSON.stringify(this.$request, null, 2)
    );
    try {
      await exec("node browser_control.js");
      const response = { message: "Browser opened successfully." };
      console.log("Response object before sending:", response);
      return this.sendCustomResponse(response);
    } catch (error) {
      console.error(`Error opening browser: ${(error as Error).message}`);
      return this.sendCustomResponse({
        message: "Sorry, I could not open the browser at the moment.",
      });
    }
  }

  @Handle({
    intents: ["NavigateBrowserIntent"],
    global: true,
    prioritizedOverUnhandled: true,
  })
  async NavigateBrowserIntent() {
    console.log("NavigateBrowserIntent handler invoked");
    console.log("Current state stack:", this.$state);
    const urlEntity = this.$entities.url;
    const url =
      urlEntity && urlEntity.resolved ? urlEntity.resolved : undefined; // Extract the URL from the user's request
    console.log("Extracted URL:", url);
    if (!url) {
      return this.sendCustomResponse({
        message: "Sorry, I could not extract the URL from the request.",
      });
    }
    try {
      await exec(`node browser_control.js ${url}`);
      console.log("Executing browser_control.js with URL:", url);
      const response = { message: `Navigated to ${url} successfully.` };
      console.log("Response object before sending:", response);
      return this.sendCustomResponse(response);
    } catch (error) {
      console.error(`Error navigating browser: ${(error as Error).message}`);
      return this.sendCustomResponse({
        message: "Sorry, I could not navigate the browser at the moment.",
      });
    }
  }
}
