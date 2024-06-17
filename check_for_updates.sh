#!/bin/bash

# Script to check for updates and apply them automatically

# Define the repository URL
REPO_URL="https://github.com/your-repo/Jarvis.git"

# Define the branch to check for updates
BRANCH="main"

# Change to the project directory
cd /home/ubuntu/Jarvis

# Fetch the latest changes from the repository
git fetch $REPO_URL $BRANCH

# Check if there are any new commits
LOCAL_COMMIT=$(git rev-parse HEAD)
REMOTE_COMMIT=$(git rev-parse FETCH_HEAD)

if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
  echo "New updates available. Pulling the latest changes..."
  git pull $REPO_URL $BRANCH

  # Install any new dependencies
  npm install

  # Restart the Jovo development server
  pm2 restart jovo-server

  echo "Updates applied successfully."
else
  echo "No updates available."
fi
