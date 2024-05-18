const fs = require("fs");
const { v4: uuid } = require("uuid");
const path = require("path");

const makeFile = async (dirName, language, code) => {
  const fileType = language;
  const fileContent = code;
  const jobId = uuid();
  const filename = `${jobId}.${fileType}`;
  const filePath = path.join(dirName, filename);
  fs.writeFileSync(filePath, fileContent);
  return filePath;
};

module.exports = { makeFile };
