const common = require("./common");

before(async () => {
  await common.getMaximizeWindow();
  await common.getDeleteAllCookies();
  await common.getURL();
  await common.setImplicitWait();
});

after(async () => {
  await common.getQuitBrowser();
});
