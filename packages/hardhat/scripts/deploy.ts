import { ethers } from "hardhat";

async function main() {
  const helloCelo = await ethers.deployContract("HelloCelo");
  await helloCelo.waitForDeployment();
  console.log(`HelloCelo deployed to ${helloCelo.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
