const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

let dirPath = __dirname.split("\\");
dirPath.pop();
let dirNPath = dirPath.join("\\");
const outDirPath = path.join(dirNPath, "codeFilesOutput");
if (!fs.existsSync(outDirPath)) {
  fs.mkdirSync(outDirPath);
}

const execCode = (filePath) => {
  const jobId = path.basename(filePath).split(".")[0];
  const outFilePath = path.join(outDirPath, `${jobId}`);
  const cmpCommand = `g++ ${filePath} -o ${outFilePath}`;
  const runCommand = `cd ${outDirPath} && ${jobId}`;

  return new Promise((resolve, reject) => {
    exec(cmpCommand, (cmpErr, cmpStdout, cmpStderr) => {
      if (cmpStderr || cmpErr) reject(cmpStderr || cmpErr);

      // Run the compiled C++ executable
      exec(runCommand, (runErr, runStdout, runStderr) => {
        if (runStderr || runErr) reject(runStderr || runErr);
        resolve(runStdout);
      });
    });
  });
};

module.exports = { execCode };
