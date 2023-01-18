import Image from "next/image";
import React from "react";
import WebIcon from "../Assets/web.png";
import mint from "../Assets/brand_logos.png";
import pic from "../Assets/pic.png";
import Header from "./components/Header";

function Main() {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full ">
          <p className="text-4xl lg:text-6xl leading-tight text-center p-16">
            Decentralised naming for <br /> wallets, websites, & more.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center py-16">
          <p className="text-[#7b3fe4] text-4xl lg:text-6xl mb-10">
            Your web3 username
          </p>
          <p className="text-3xl font-thin mb-10">
            No more sandboxed usernames. Own your username, store <br /> an
            avatar and other profile data, and use it across services.
          </p>
          <div className="flex py-1 cursor-pointer px-10 items-center border-2 rounded-full">
            <Image
              className="w-[50px] h-[50px] rounded-full mr-3"
              src={pic}
              alt=""
            />
            <p className="text-[42px]">stark.matic</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-6 lg:py-16 text-center bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 ">
          <p className="text-[#7b3fe4] text-4xl lg:text-6xl mb-10 ">
            One name for all your addresses
          </p>
          <p className="text-3xl font-thin mb-10 text-center">
            No more copying and pasting long addresses. Use your ENS <br />
            name to store all of your addresses and receive any <br />
            cryptocurrency, token, or NFT.
          </p>
          <Image className="lg:w-[550px]" src={mint} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center p-6 py-16">
          <p className="text-[#7b3fe4] text-4xl lg:text-6xl mb-10 ">
            Decentralised Websites
          </p>
          <p className="text-3xl font-thin mb-10 lg:text-center">
            Launch censorship-resistant decentralised websites with <br />
            ENS. Upload your website to IPFS and access it with your <br />
            ENS name.
          </p>

          <div className="flex gap-4 lg:py-6">
            <div className="">
              <Image className="w-[150px]" src={WebIcon} alt="" />
              <p className="text-xl font-semibold">vatan.matic</p>
            </div>
            <div className="">
              <Image className="w-[150px]" src={WebIcon} alt="" />
              <p className="text-xl font-semibold">teresa.matic</p>
            </div>
            <div className="">
              <Image className="w-[150px]" src={WebIcon} alt="" />
              <p className="text-xl font-semibold">muthu.matic</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Main;
