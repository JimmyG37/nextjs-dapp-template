const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Contract Name Unit Tests", () => {
          let contractName, deployer, user

          beforeEach(async () => {
              accounts = await ethers.getSigners() // could also do with getNamedAccounts
              deployer = accounts[0]
              user = accounts[1]
              await deployments.fixture(["all"])
              contractName = await ethers.getContract("ContractName")
          })
      })
