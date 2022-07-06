import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Uniswap Router02 contract`);

  // Initialize the wallet.
  const wallet = new Wallet("0x181bb3d90fc9f57435c887957c7a4457128d7b1966c4b0ab37a7a6b226afaa08");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  // const wethArtifact = await deployer.loadArtifact("WETH9");
  const tokenArtifact = await deployer.loadArtifact("TestERC20");

  // Deposit some funds to L2 in order to be able to perform L2 transactions.
  const depositAmount = ethers.utils.parseEther("0.020");
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });
  // Wait until the deposit is processed on zkSync
  await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  // const factory = "0xD862920667521C4611fF55537096E80AEEf06437";
  // const WethFactory = await deployer.deploy(wethArtifact, []);
  // const RouterFactory = await deployer.deploy(routerArtifact, [factory, WethFactory.address]);
  const tokenFactory = await deployer.deploy(tokenArtifact, []);
  console.log(`${tokenArtifact.contractName} was deployed to ${tokenFactory.address}` )
}