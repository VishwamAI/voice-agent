import { BaseComponent, Handle } from "@jovotech/framework";
// ... [rest of the file content before the ternary operations] ...
const latitude = locationEntity && locationEntity.latitude
    ? locationEntity.latitude
    : "48.8566"; // Default latitude
// ... [rest of the file content after the ternary operations] ...

