const common = require("../utils/common");
const loginPage = require("../pages/loginPage");
require("../utils/startup");

describe("title test", function () {
  it("verify the title on login page", async function () {
    await common.getWindowTitle("The Internet");
  });
});

describe("login Test", function () {
  it("verify user is logged in successfully!", async function () {
    await loginPage.loginToApp();
  });
});
