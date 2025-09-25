const fs = require("fs");
const path = require("path");

const logFilePath = path.join(process.cwd(), "requests.log");

function logger(req, res, next) {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  fs.appendFile(logFilePath, log, (err) => {
    if (err) console.error("Error writing log:", err);
  });
  console.log(log.trim());
  next();
}

module.exports = { logger };