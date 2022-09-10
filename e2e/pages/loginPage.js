const common = require("../utils/common");
const config = require("config");

const username = config.get("username");
const password = config.get("password");

const USERNAME = "username";
const PASSWORD = "password";
const LOGIN = "//form/button[@type='submit']";

class LoginPage {
  async loginToApp() {
    await common.getSendKeys(USERNAME, "id", "username textbox", username);
    await common.getSendKeys(PASSWORD, "id", "password textbox", password);
    await common.getClick(LOGIN, "xpath", "login button");
  }
}

module.exports = new LoginPage();
