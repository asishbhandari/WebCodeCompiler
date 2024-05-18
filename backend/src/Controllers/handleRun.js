const { makeDir } = require("../helperFunc/makeDir");
const { makeFile } = require("../helperFunc/makeFile");
const { execCode } = require("../helperFunc/execCode");
const { execCodeRs } = require("../helperFunc/execCodeRs");
const { execSolidity } = require("../helperFunc/execSolidity");
const { execMotoko } = require("../helperFunc/execMotoko");

const handleRun = async (req, res) => {
  try {
    let { language, code } = req.body;
    // const dirName = await makeDir();
    // const filePath = await makeFile(dirName, language, code);

    let codeOutput;
    // = await compileAndRun(code, language);
    switch (language.toLowerCase()) {
      case "cpp": {
        const dirName = await makeDir();
        const filePath = await makeFile(dirName, language, code);
        codeOutput = await execCode(filePath);
        break;
      }
      case "rs": {
        const dirName = await makeDir();
        const filePath = await makeFile(dirName, language, code);
        codeOutput = await execCodeRs(filePath);
        break;
      }
      case "sol": {
        const dirName = await makeDir();
        const filePath = await makeFile(dirName, language, code);
        codeOutput = await execSolidity(filePath);
        break;
      }
      case "mo": {
        codeOutput = await execMotoko(language, code);
        break;
      }
      default:
        throw new Error("Unsupported Language");
    }
    res.status(200).json(codeOutput);
  } catch (err) {
    // console.log(err?.message);
    res.status(400).json({
      result: "failed",
      error: err?.message || err,
    });
  }
};
module.exports = { handleRun };
