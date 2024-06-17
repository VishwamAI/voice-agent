#!/bin/bash

# Update Jarvis voice assistant

# Pull the latest changes from the repository
git pull origin main

# Install any new dependencies
npm install

# Compile TypeScript files
npm run tsc

# Restart the Jovo development server
pm2 restart jarvis

echo "Jarvis has been updated and restarted successfully."
