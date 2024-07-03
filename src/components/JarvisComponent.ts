import { BaseComponent } from "@jovotech/framework";

interface ResponseObject {
  message: string;
}

import { exec } from "child_process";

export class JarvisComponent extends BaseComponent {
  sendCustomResponse(response: ResponseObject) {
    this.$output.push({
      message: response.message,
    });
  }

  async CheckWeatherIntent() {
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
        `curl "http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${latitude},${longitude}"`
      );
      const weatherData = JSON.parse(stdout as unknown as string);
      const weatherMessage = `The current temperature in ${weatherData.location.name} is ${weatherData.current.temp_c}°C with ${weatherData.current.condition.text}.`;
      return this.sendCustomResponse({ message: weatherMessage });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return this.sendCustomResponse({
        message: "Sorry, I could not fetch the weather data.",
      });
    }
  }
}
