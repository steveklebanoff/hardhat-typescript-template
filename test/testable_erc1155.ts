import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { TestableERC1155, TestableERC1155__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expectBnEqual } from "./helpers";

chai.use(solidity);
const { expect } = chai;

describe("TestableERC1155", () => {
  let testableErc1155: TestableERC1155;
  let accounts: SignerWithAddress[];

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    const testableFactory = (await ethers.getContractFactory(
      "TestableERC1155",
      accounts[0]
    )) as TestableERC1155__factory;
    testableErc1155 = await testableFactory.deploy();
    await testableErc1155.deployed();
  });

  it("should be mintable", async () => {
    await testableErc1155.mint(accounts[0].address, 1, 5);
    expectBnEqual(await testableErc1155.balanceOf(accounts[0].address, 1), 5);
  });
});
