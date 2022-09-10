require("./driver");
require("chai").should();
const { By, until } = require("selenium-webdriver");
const config = require("config");
const log = require("./logger");
const env = process.env.NODE_ENV || "prod";

const baseURL = config.get("url");

class Common {
  async getURL() {
    await driver.get(baseURL);
    log.info(`The test will run on ${env} environment`);
    log.info(`The url is: ${baseURL}`);
  }

  async setImplicitWait() {
    await driver.manage().setTimeouts({ implicit: 10000 });
    log.info("Set Implicit Wait Globally");
  }

  async getMaximizeWindow() {
    await driver.manage().window().maximize();
    log.info("Browser window maximized");
  }

  async getDeleteAllCookies() {
    await driver.manage().deleteAllCookies();
    log.info("Deleted Browser Cookies");
  }

  async getWindowTitle(windowTitle) {
    let title = await driver.getTitle().then(function (value) {
      return value;
    });

    await title.should.equal(windowTitle);
    log.info(`The title on browser window is ${windowTitle}`);
  }

  async getElementLocator(locator, locatorType) {
    let element = null;
    let timer = 30000;
    if (locatorType === "id") {
      element = await driver.wait(until.elementLocated(By.id(locator)), timer);
    } else if (locatorType === "xpath") {
      element = await driver.wait(
        until.elementLocated(By.xpath(locator)),
        timer
      );
    } else if (locatorType === "name") {
      element = await driver.wait(
        until.elementLocated(By.name(locator)),
        timer
      );
    } else if (locatorType === "css") {
      element = await driver.wait(until.elementLocated(By.css(locator)), timer);
    } else if (locatorType === "linkText") {
      element = await driver.wait(
        until.elementLocated(By.linkText(locator)),
        timer
      );
    } else if (locatorType === "partialLinkText") {
      element = await driver.wait(
        until.elementLocated(By.partialLinkText(locator)),
        timer
      );
    }
    return element;
  }

  async getSendKeys(locator, locatorType, locatorName, sendValue) {
    let element = await this.getElementLocator(locator, locatorType);
    if (element.isDisplayed()) {
      await element.clear();
      await element.sendKeys(sendValue);
      log.info(`Entered value into ${locatorName}`);
    } else {
      log.error(`${locatorName} not found`);
    }
  }

  async getClick(locator, locatorType, locatorName) {
    let element = await this.getElementLocator(locator, locatorType);
    if (element.isEnabled()) {
      await element.click();
      log.info(`Clicked ${locatorName}`);
    } else {
      log.error(`${locatorName} is disabled`);
    }
  }

  async getQuitBrowser() {
    await driver.quit();
    log.info("Browser Closed");
  }
}

module.exports = new Common();
