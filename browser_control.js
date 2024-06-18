const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const edge = require('selenium-webdriver/edge');

async function openBrowser(browserName, url) {
  let driver;
  if (browserName === 'chrome') {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().addArguments('--headless'))
      .build();
    console.log('Chrome browser launched in headless mode.');
  } else if (browserName === 'edge') {
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(new edge.Options().addArguments('--headless'))
      .build();
    console.log('Edge browser launched in headless mode.');
  } else {
    console.error('Unsupported browser!');
    return;
  }

  try {
    console.log(`Navigating to URL: ${url}`);
    await driver.get(url);
    await driver.sleep(5000); // Wait for 5 seconds to see the opened page
    console.log('Page loaded successfully.');
  } catch (error) {
    console.error('Error during browser navigation:', error);
  } finally {
    await driver.quit();
    console.log('Browser closed.');
  }
}

// Example usage: open Google in Chrome
openBrowser('chrome', 'https://www.google.com');

// Example usage: open Bing in Edge
openBrowser('edge', 'https://www.bing.com');
