const logoutpage = require("../pages/logoutPage");
require("../utils/startup");

describe("logout test", function () {
  it("verify user is logged out successfully!", async function () {
    await logoutpage.logoutFromApp();
  });
});
