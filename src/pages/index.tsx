import Image from "next/image";
import Head from "@/components/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#fefcf1] ">
      <Head />
      <div className="relative w-11/12 max-w-md md:max-w-lg lg:max-w-2xl h-[45vh] md:h-[55vh] lg:h-[65vh]">
        <Image
          src="/LandingPage-Without Button (1).jpg"
          alt="Next.js logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Apply the Gotham-Light font to the button */}

      <Link
        className={`font-montserrat px-4 py-1 rounded-full bg-[#b5c7a0]  hover:bg-[#d8e2b5] text-black text-xs font-medium md:text-lg my-5 transition-all duration-300 ease-in-out
        border-t-[1px] border-t-[#819a64] 
        border-r-[1px] border-r-[#819a64] 
        border-b-[1px] border-b-[#819a64] 
        border-l-[1px] border-l-[#819a64] 
        hover:border-t-[#819a64] 
        hover:border-r-[#819a64] 
        hover:border-b-[#819a64] 
        hover:border-l-[#819a64]  `}
        href={"/main"}
        style={{
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      >
        CLICK FOR DETAILS
      </Link>
    </div>
  );
}
