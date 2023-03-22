const Web3 = require("web3");
const Transactions = require("./model/Transactions");
const accNum = process.env.ACC_NUMBER;
let global = 3206089; // block with 1 5ire token transfered from my account.
// let global = 3205952; //block with 4 5ire token transfered from my account

let web3 = new Web3(
  new Web3.providers.HttpProvider("https://rpc-testnet.5ire.network")
);
// const accNum='0x09a804d14ed9Ca4ecEb55565f6F212547053C1A8';

const TransChecker = async () => {
  const BlockData = await web3.eth.getBlock(global);
  global++;
  //   console.log(BlockData);
  //   console.log(BlockData.transactions);

  BlockData.transactions.map(async (txHash) => {
    const txData = await web3.eth.getTransaction(txHash);
    // console.log(txHash);
    // console.log("From Account", txData.from);
    // console.log("To Account", txData.to);
    const transDoc = await Transactions.findOne({ transactionHash: txHash });
    console.log(transDoc, "this is transdoc");
    if (transDoc) {
      console.log("This transaction is already present");
    } else if (txData.from === accNum || txData.to === accNum) {
      await Transactions.create({
        to: txData.to,
        from: txData.from,
        value: txData.value,
        gasPrice: txData.gasPrice,
        transactionHash: txHash,
      });

      console.log("It is pushed into the DB");
    } else {
      console.log("no transaction there");
    }
  });
};

module.exports = TransChecker;
