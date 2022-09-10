const common = require("../utils/common");

const LOGOUT = "//div[@class='example']/a";

class LogoutPage {
  async logoutFromApp() {
    await common.getClick(LOGOUT, "xpath", "logout button");
  }
}

module.exports = new LogoutPage();
