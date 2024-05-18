const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const execCodeRs = (filePath) => {
  const jobId = path.basename(filePath).split(".")[0];
  const cmpCommand = `rustc ${filePath} `;
  const runCommand = `${jobId}`;

  return new Promise((resolve, reject) => {
    exec(cmpCommand, (cmpErr, cmpStdout, cmpStderr) => {
      if (cmpStderr || cmpErr) reject(cmpStderr || cmpErr);

      // Run the compiled rust executable
      exec(runCommand, (runErr, runStdout, runStderr) => {
        if (runStderr || runErr) reject(runStderr || runErr);

        resolve(runStdout);
      });
    });
  });
};

module.exports = { execCodeRs };
