#!/bin/bash

# This hook script removes the --illegal-access=permit option from the gradlew script before the build starts

GRADLEW_FILE="platforms/android/gradlew"

if [ -f "$GRADLEW_FILE" ]; then
    sed -i 's/--illegal-access=permit//g' "$GRADLEW_FILE"
    echo "Removed --illegal-access=permit option from gradlew script"
    echo "Contents of gradlew script after modification:"
    cat "$GRADLEW_FILE"
else
    echo "gradlew script not found"
    exit 1
fi
