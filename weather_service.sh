#!/bin/bash

# Script to fetch weather information from Open-Meteo API

# Function to fetch weather data for a given location
fetch_weather() {
  local latitude=$1
  local longitude=$2

  # Construct the API request URL
  local api_url="https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true"

  # Fetch the weather data
  local response=$(curl -s "$api_url")

  # Check if the API request was successful
  if [ $? -ne 0 ]; then
    echo "Error: Failed to fetch weather data."
    return 1
  fi

  # Check if the response contains valid weather data
  if [ -z "$response" ] || [ "$(echo "$response" | jq -r '.current_weather')" == "null" ]; then
    echo "Error: Invalid weather data received."
    return 1
  fi

  # Parse the JSON response to extract weather information
  local temperature=$(echo "$response" | jq '.current_weather.temperature')
  local wind_speed=$(echo "$response" | jq '.current_weather.windspeed')
  local weather_code=$(echo "$response" | jq -r '.current_weather.weathercode')

  # Translate weather code to human-readable description
  local weather_description=$(translate_weather_code "$weather_code")

  # Output the weather information
  echo "Current temperature: ${temperature}°C"
  echo "Wind speed: ${wind_speed} km/h"
  echo "Weather description: ${weather_description}"
}

# Function to translate weather code to human-readable description
translate_weather_code() {
  local code=$1
  case $code in
    0) echo "Clear sky" ;;
    1) echo "Mainly clear" ;;
    2) echo "Partly cloudy" ;;
    3) echo "Overcast" ;;
    45) echo "Fog" ;;
    48) echo "Depositing rime fog" ;;
    51) echo "Drizzle: Light" ;;
    53) echo "Drizzle: Moderate" ;;
    55) echo "Drizzle: Dense intensity" ;;
    56) echo "Freezing Drizzle: Light" ;;
    57) echo "Freezing Drizzle: Dense intensity" ;;
    61) echo "Rain: Slight" ;;
    63) echo "Rain: Moderate" ;;
    65) echo "Rain: Heavy intensity" ;;
    66) echo "Freezing Rain: Light" ;;
    67) echo "Freezing Rain: Heavy intensity" ;;
    71) echo "Snow fall: Slight" ;;
    73) echo "Snow fall: Moderate" ;;
    75) echo "Snow fall: Heavy intensity" ;;
    77) echo "Snow grains" ;;
    80) echo "Rain showers: Slight" ;;
    81) echo "Rain showers: Moderate" ;;
    82) echo "Rain showers: Violent" ;;
    85) echo "Snow showers: Slight" ;;
    86) echo "Snow showers: Heavy" ;;
    95) echo "Thunderstorm: Slight or moderate" ;;
    96) echo "Thunderstorm with slight hail" ;;
    99) echo "Thunderstorm with heavy hail" ;;
    *) echo "Unknown weather code" ;;
  esac
}

# Check if latitude and longitude are provided as arguments
if [ $# -ne 2 ]; then
  echo "Usage: $0 <latitude> <longitude>"
  exit 1
fi

# Fetch weather for the provided location (latitude, longitude)
fetch_weather $1 $2
