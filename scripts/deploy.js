async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}
// 6cd1a9621e5386196ced43a0b8199eb0d9e18a05ad68899e47d2715602304907

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x271D2BeB5db7266Cd34D512C8F8c06AD247fab4a
// 0x72f391715eA1f4eF07c40282E87B0cF25042F897
// 0x8E915DF57C6180a5fb1C524087f7ade7c920f38c
// 0x1bb732666E5CEe6EE0fE8503C91b3D6a4229216f   this is deployement is from my account.... private key
// transaction hash  0xa782129063948be5e37afc6fc4c13eef40a560c66a2edead3bb4943b9db4cad0