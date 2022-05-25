import { expect } from "chai";
import { ethers } from "hardhat";
import { IERC20Uniswap } from "../typechain-types/index"

describe("UniswapV2", function () {
  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

  beforeEach(async ()=> {
    const ERC20_Factory = await ethers.getContractFactory("UniswapV2ERC20");
    const UniFactory_Factory = await ethers.getContractFactory("UniswapV2Factory");
    const UniPair_Factory = await ethers.getContractFactory("UniswapV2Pair");

    const erc20 = await ERC20_Factory.deploy()

  })
});
