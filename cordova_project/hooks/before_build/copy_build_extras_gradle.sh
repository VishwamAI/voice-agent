#!/bin/bash

# This hook script copies the build-extras.gradle file to the platforms/android/app directory before the build starts

BUILD_EXTRAS_FILE="build-extras.gradle"
DEST_DIR="platforms/android/app"

if [ -f "$BUILD_EXTRAS_FILE" ]; then
    cp "$BUILD_EXTRAS_FILE" "$DEST_DIR"
    echo "Copied build-extras.gradle to platforms/android/app directory"
else
    echo "build-extras.gradle file not found"
    exit 1
fi
