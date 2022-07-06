import { expect } from "chai";
import { ethers } from "hardhat";
import { IERC20Uniswap } from "../typechain-types/index"

describe("UniswapV2", function () {

  beforeEach(async ()=> {
    const ERC20_Factory = await ethers.getContractFactory("UniswapV2ERC20");
    const UniFactory_Factory = await ethers.getContractFactory("UniswapV2Factory");
    const UniPair_Factory = await ethers.getContractFactory("UniswapV2Pair");
  })
});
