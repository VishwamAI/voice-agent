# Jarvis Voice Assistant
[![CI](https://github.com/VishwamAI/voice-agent/actions/workflows/ci.yml/badge.svg)](https://github.com/VishwamAI/voice-agent/actions/workflows/ci.yml)
## Overview
Jarvis is a voice assistant built using the Jovo framework. It supports advanced voice recognition capabilities, multi-language support with a focus on Telugu, and features auto-update and auto-upgrade capabilities. The assistant is designed to be secure and maintain user privacy while providing full access to devices.

## Features
- Advanced voice recognition and command execution
- Multi-language support (English and Telugu)
- Auto-update and auto-upgrade capabilities
- Robust security measures

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/VishwamAI/voice-agent.git
   cd voice-agent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set the weather API key environment variable:
   ```bash
   export WEATHER_API_KEY=your_api_key_here
   ```

4. Run the app in development mode:
   ```bash
   npm run start:dev
   ```

## Packaging
Instructions for packaging the voice assistant for different platforms are provided in the `SETUP_AND_PACKAGING.md` file.

## Documentation
Detailed documentation for setting up, running, and packaging the voice assistant can be found in the `SETUP_AND_PACKAGING.md` file.

## Contributing
Please follow the guidelines in the `CONTRIBUTING.md` file for contributing to this project.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Notes
- The project uses `esbuild` for bundling JavaScript files.
- Packaging instructions involve using `dpkg-deb` for `.deb` packages, the Android SDK and `gradle` for `.apk` files, and `electron-packager` for `.exe` files.

[This Devin run](https://preview.devin.ai/devin/c5de92b3aca2446bb8adae682659e8c5) was requested by kasinadhsarma.
