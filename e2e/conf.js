module.exports = {
  timeouts: 60000,
  exit: true,
  bail: true,
  slow: 1000,
  recursive: true,
  parallel: false,

  spec: ["./specs/loginSpec.js", "./specs/logoutSpec.js"],

  reporter: "mochawesome",
  require: "mochawesome/register",
  reporterOption: [
    "reportDir=reports",
    "reportTitle=Automation Report",
    "reportFilename=report",
  ],
};
