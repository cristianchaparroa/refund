import { ethers } from "hardhat";

async function main() {
  const projects = await ethers.deployContract("Projects");
  await projects.waitForDeployment();
  console.log(`Projects contract deployed to ${projects.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
