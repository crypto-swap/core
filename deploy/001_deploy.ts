import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the UniswapV2 Factory contract`);

  // Initialize the wallet.
  const wallet = new Wallet("0x181bb3d90fc9f57435c887957c7a4457128d7b1966c4b0ab37a7a6b226afaa08");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("UniswapV2Factory");

  // Deposit some funds to L2 in order to be able to perform L2 transactions.
  const depositAmount = ethers.utils.parseEther("0.010");
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });
  // Wait until the deposit is processed on zkSync
  await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const feeSetter = "0x8598e3c829F0593a1C9356301180D0dD16088907";
  const V2Factory = await deployer.deploy(artifact, [feeSetter]);

  // Show the contract info.
  const contractAddress = V2Factory.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}