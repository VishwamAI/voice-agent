#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const gradlewFilePath = path.join(__dirname, "../../platforms/android/gradlew");

fs.readFile(gradlewFilePath, "utf8", (err, data) => {
    if (err) {
        console.error(`Error reading gradlew file: ${err}`);
        process.exit(1);
    }

    // Remove --illegal-access=permit option
    const updatedData = data.replace(/--illegal-access=permit/g, "");

    fs.writeFile(gradlewFilePath, updatedData, "utf8", (err) => {
        if (err) {
            console.error(`Error writing to gradlew file: ${err}`);
            process.exit(1);
        }

        console.log("Removed --illegal-access=permit option from gradlew script");
    });
});
