const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ message, timestamp }) => {
  return `${timestamp} => ${message}`;
});

const logger = createLogger({
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [new transports.File({ filename: "./logs/automation.log" })],
});

module.exports = logger;
