import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/pns-logo.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:item-center justify-between py-4 px-4 align-middle items-center">
      <Link href="/">
        <Image className="w-[150px] mx-8" src={logo} alt="" />
      </Link>
      <div className="flex item-center sm:justify-end justify-between w-full">
        <div className="px-2 py-1 mr-8">
      <ConnectButton />
      </div>
        <Link
          className="font-xl mr-8 bg-[#7b3fe4] rounded-lg px-3 py-1 text-white"
          href="../BuyDomain"
        >
         <p className="py-2">Buy Domain</p> 
        </Link>
        <Link
          className="font-xl bg-[#7b3fe4] rounded-lg px-3 py-1 text-white"
          href="/SellDomain"
        >
      <p className="py-2">Sell Domain</p> 
        </Link>
      </div>
    </div>
  );
};

export default Header;
