const fs = require("fs");
const path = require("path");

const makeDir = async () => {
  let pathName = __dirname.split("\\");
  pathName.pop();
  pathName = pathName.join("\\");
  const dirName = path.join(pathName, "codeFiles");
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
  return dirName;
};

module.exports = { makeDir };
