import Web3 from "web3";
import register from "./Registry.json";
import { ethers } from "ethers";
import rawdata from "./RawData.json";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

// Define Contracts address
const REGISTER_CONTRACT = "0x40B4A7a46b2C6e797fFEd6c3D5C4B5EcE8C0Aea3";
const RESOLVER_CONTRACT = "0xF22136ECFedAF15716A3e67A30f86EF53740d84C";
const RAWDATA_CONTRACT = "0xe66983CcB6F6D1480fFf4C20b7ffbE7dfE1Ae1E8";

const Available = async ({ name }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  // console.log(provider);
  const Domain = new ethers.Contract(REGISTER_CONTRACT, register, signer);
  const tokenId = await Domain.available(name);
  localStorage.setItem("name", name);
  console.log(tokenId);
  if (tokenId == true) {
    console.log("Domain is Available");
    stringtobyte({ name });
    Makecommitment();
    commit();
    setTimeout(registerdom({ name }), 60000);
  } else {
    console.log("Domain is Already registered");
  }
  return tokenId;
};

const stringtobyte = async ({ name }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();
  const Domain = new ethers.Contract(RAWDATA_CONTRACT, rawdata, signer);
  const tokenId = await Domain.stringToBytes32(name);
  localStorage.setItem("secret", tokenId);
  console.log(tokenId);
  return tokenId;
};

const Makecommitment = async () => {
  const name = localStorage.getItem("name");
  const secret = await stringtobyte({ name });
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();
  const Domain = new ethers.Contract(RAWDATA_CONTRACT, rawdata, signer);
  const tokenId = await Domain.makeCommitmentWithConfig(
    name,
    secret,
    RESOLVER_CONTRACT
  );
  localStorage.setItem("Makecommitment", tokenId);
  console.log(tokenId);
  return tokenId;
};

const commit = async () => {
  const commitment = await Makecommitment();
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();
  console.log("commit check", commitment);
  const Domain = new ethers.Contract(REGISTER_CONTRACT, register, signer);
  const tokenId = await Domain.commit(commitment);
  localStorage.setItem("commitment", commitment);
  console.log(tokenId);
  return tokenId;
};

const registerdom = async () => {
  const name = localStorage.getItem("name");
  console.log("registerdom Name: ", name);
  const secret = localStorage.getItem("secret");
  console.log("Secret:", secret);
  const bigNumber = ethers.BigNumber.from("1000000000000000");
  console.log("BigNumber: ", ethers.utils.formatEther(bigNumber));
  const price =
    name.length === 3 ? "0.003" : name.length === 4 ? "0.002" : "0.001";
  console.log("Price:", price);
  const { ethereum } = isBrowser();
  console.log("Ethereum:", ethereum);
  if (ethereum) {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();

    const signer = provider.getSigner();
    const Domain = new ethers.Contract(REGISTER_CONTRACT, register, signer);

    console.log("domain", Domain);
    let tx = await Domain.registerDomain(name, secret, RESOLVER_CONTRACT, {
      value: ethers.utils.parseEther(price),
    });
    console.log("tx", tx);
  }
};

const reportError = (error) => {
  setAlert(JSON.stringify(error), "red");
  throw new Error("No ethereum object.");
};

export { Available, registerdom };
