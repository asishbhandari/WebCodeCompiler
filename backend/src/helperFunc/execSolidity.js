const fs = require("fs");
const solc = require("solc");
const Web3 = require("web3");
const ganache = require("ganache-cli");

const web3 = new Web3(ganache.provider());

const execSolidity = async (filePath) => {
  const source = fs.readFileSync(filePath, "utf8");

  const input = {
    language: "Solidity",
    sources: {
      "Contract.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  if (output.errors) {
    output.errors.forEach((error) => {
      console.error(error.formattedMessage);
    });
    reject(new Error("Solidity compilation errors"));
    return;
  }

  const { abi, evm } = output.contracts["Contract.sol"].HelloWorld;
  const bytecode = evm.bytecode.object;

  // Deploy contract
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(abi);

  const deployedContract = await contract
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: 1500000, gasPrice: "30000000000000" });

  // Call getMessage function
  const message = await deployedContract.methods.getMessage().call();

  return message;
};

module.exports = { execSolidity };
