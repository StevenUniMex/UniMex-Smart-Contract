const hre = require("hardhat");

async function main() {
  console.log("Deploying wstUNX contract...");

  const wstUNX = await hre.ethers.getContractFactory("wstUNX");
  const token = await wstUNX.deploy();
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("wstUNX deployed to:", address);
  console.log("Transaction hash:", token.deploymentTransaction().hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

