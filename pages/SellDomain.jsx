import React from "react";
import Header from "./components/Header";

const SellDomain = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full text-center p-6">
        <p className="text-4xl lg:text-6xl leading-tight text-center">
          Premium Polygon Domains Sale
        </p>
        <p className="text-3xl font-thin mt-4">
          Rare & exclusive Web3 domains, available for the first time ever.
        </p>
      </div>
      {/* Domain Search Box */}
      <div className="flex justify-center">
        <div className="flex justify-between h-[50px] lg:h-[90px] rounded-lg mt-8 w-[80%] border-2">
          <input
            className="lowercase text-md lg:text-3xl outline-none ml-4 font-light"
            type="text"
            placeholder="Find a Polygon domain"
          />
          <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white w-[30%] text-md lg:text-3xl rounded-r-lg font-light">
            Search
          </button>
        </div>
      </div>
      {/* Dummy Domain */}
      <div className="flex justify-center p-2">
        <div className="w-[50%] lg:w-[80%] grid gap-6 lg:gap-10 grid-cols-2 lg:grid-cols-4 text-center lg:p-10">
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="w-full bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
          <div className="w-[100px] lg:w-[200px] flex flex-col justify-around h-[100px] rounded bg-[#7b3fe4]/25">
            <p className="p-4 text-xl lg:text-3xl">xyz.matic</p>
            <button className="bg-[#a87ef0] hover:bg-[#7b3fe4] hover:text-white text-md lg:text-xl rounded-lg font-light">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellDomain;
