# Jarvis Voice Assistant Setup and Packaging Guide

## Introduction
This guide provides instructions for setting up, running, and packaging the Jarvis voice assistant. The project is built using the Jovo Framework v4 and supports multiple platforms, including Amazon Alexa and Google Assistant. Additionally, the guide includes steps for packaging the application into `.deb`, `.apk`, and `.exe` files for deployment on Linux, Android, and Windows platforms.

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- TypeScript
- Jovo CLI
- Git

## Setup

### 1. Clone the Repository
Clone the project repository to your local machine:
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
Install the project dependencies using npm:
```bash
npm install
```

### 3. Build the Project
Compile the TypeScript source code into JavaScript:
```bash
npm run build
```

### 4. Run the Project in Development Mode
Start the Jovo app in development mode:
```bash
npm run start:dev
```

## Packaging

### Packaging for Linux (.deb)
To create a `.deb` package for Debian-based Linux distributions, follow these steps:

1. Install `dpkg-deb` if not already installed:
   ```bash
   sudo apt-get install dpkg-deb
   ```

2. Create a directory structure for the package:
   ```bash
   mkdir -p jarvis/DEBIAN
   mkdir -p jarvis/usr/local/bin
   ```

3. Create a control file in the `DEBIAN` directory with package metadata:
   ```bash
   cat <<EOF > jarvis/DEBIAN/control
   Package: jarvis
   Version: 1.0.0
   Section: base
   Priority: optional
   Architecture: all
   Depends: nodejs
   Maintainer: Your Name <your.email@example.com>
   Description: Jarvis Voice Assistant
   EOF
   ```

4. Copy the project files to the package directory:
   ```bash
   cp -r * jarvis/usr/local/bin/
   ```

5. Build the `.deb` package:
   ```bash
   dpkg-deb --build jarvis
   ```

### Packaging for Android (.apk)
To create an `.apk` file for Android, follow these steps:

1. Install the Android SDK and set up the environment variables:
   ```bash
   export ANDROID_HOME=/path/to/android-sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```

2. Create a new Cordova project:
   ```bash
   cordova create jarvis com.example.jarvis Jarvis
   cd jarvis
   ```

3. Add the Android platform:
   ```bash
   cordova platform add android
   ```

4. Copy the project files to the `www` directory:
   ```bash
   cp -r ../<project-directory>/* www/
   ```

5. Build the `.apk` file:
   ```bash
   cordova build android
   ```

### Packaging for Windows (.exe)
To create an `.exe` file for Windows, follow these steps:

1. Install `electron-packager` globally:
   ```bash
   npm install -g electron-packager
   ```

2. Create a main entry point for Electron (e.g., `main.js`):
   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');

   function createWindow() {
     const mainWindow = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         preload: path.join(__dirname, 'preload.js'),
       },
     });

     mainWindow.loadFile('index.html');
   }

   app.on('ready', createWindow);
   ```

3. Create a `preload.js` file:
   ```javascript
   window.addEventListener('DOMContentLoaded', () => {
     const replaceText = (selector, text) => {
       const element = document.getElementById(selector);
       if (element) element.innerText = text;
     };

     for (const dependency of ['chrome', 'node', 'electron']) {
       replaceText(`${dependency}-version`, process.versions[dependency]);
     }
   });
   ```

4. Create an `index.html` file:
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Jarvis Voice Assistant</title>
     </head>
     <body>
       <h1>Welcome to Jarvis Voice Assistant</h1>
       <p>Chrome version: <span id="chrome-version"></span></p>
       <p>Node version: <span id="node-version"></span></p>
       <p>Electron version: <span id="electron-version"></span></p>
     </body>
   </html>
   ```

5. Package the application into an `.exe` file:
   ```bash
   electron-packager . Jarvis --platform=win32 --arch=x64 --out=dist --overwrite
   ```

## Conclusion
This guide provides the necessary steps to set up, run, and package the Jarvis voice assistant for different platforms. If you encounter any issues or need further assistance, please refer to the project's documentation or contact the maintainers.
