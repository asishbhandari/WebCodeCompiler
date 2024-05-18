const mo = require("motoko");

const execMotoko = async (language, code) => {
  mo.write("Main.mo", `${code}`);
  const result = mo.run("Main.mo");
  if (result.stderr) {
    throw new Error(result.stderr);
  }
  return result.stdout;
};

module.exports = { execMotoko };
