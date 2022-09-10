const { Builder } = require("selenium-webdriver");
const log = require("./logger");
const config = require("config");

const browser = process.env.BROWSER || config.get("browser");
const protocol = process.env.PROTOCOL || config.get("protocol");
const host = process.env.HOST || config.get("host");
const port = process.env.PORT || config.get("port");
const seleniumAddress =
  process.env.seleniumAddress || `${protocol}://${host}:${port}`;

let driver = new Builder()
  .forBrowser(browser)
  .usingServer(seleniumAddress)
  .build();

class Driver {
  constructor() {
    global.driver = driver;
    log.info("Driver has Initialized");
    log.info(`Opening ${browser} browser`);
  }
}

module.exports = new Driver();
