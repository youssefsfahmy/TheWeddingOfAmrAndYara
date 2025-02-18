import Image from "next/image";
import Head from "@/components/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const audioRef = useRef<any>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/Ash - Acoustic Live (mp3cut.net).mp3");
      audioRef.current = audio;

      // Attempt to play the audio automatically
      const playAudio = () => {
        audio
          .play()
          .then(() => console.log("Autoplay started"))
          .catch(() => console.log("Autoplay blocked"));

        audio.loop = true;
      };

      // If autoplay is blocked, wait for user interaction
      document.addEventListener("click", playAudio, { once: true });

      return () => {
        document.removeEventListener("click", playAudio);
        audio.pause();
      };
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  w-full bg-[#f6efe4]  ">
      <Head />

      <div className="w-full bg-[#f6efe4] flex items-center justify-center snap-start relative max-w-screen-sm ">
        <Image
          src="/Yara and Amr's Wedding Invitation-1.png"
          alt="Next.js logo"
          layout="responsive"
          width={3000} // Original image width
          height={11491} // Original image height
          priority
          hidden={!started}
        />
        <Link
          href="/https://maps.app.goo.gl/LDYf7bW1FHvPmsHc8"
          target="_blank"
          className="font-[emoji] font-semibold text-[#f3f2e1] px-4 py-[0.2rem] rounded-full bg-[#ddb072]  hover:bg-[#d8e2b5]  text-sm md:text-xl  transition-all duration-300 ease-in-out text-center"
          style={{
            position: "absolute",
            bottom: "32.3%",
            left: "50%",
            width: "22%",
            transform: "translateX(-50%)",
          }}
        >
          Location
        </Link>
      </div>
      <div
        className={`w-full bg-[#f6efe4] flex flex-col items-center justify-center snap-start relative max-w-screen-sm ${
          started ? "hidden" : "h-screen max-h-screen"
        }`}
      >
        <Image
          src="/output-onlinepngtools (11).png"
          alt="Next.js logo"
          layout="responsive"
          className="max-w-[481px] !w-[80%]"
          width={3000} // Original image width
          height={11491} // Original image height
          priority
          hidden={started}
        />
        <button
          className={`font-montserrat px-4 py-1 rounded-full bg-[#b5c7a0]  hover:bg-[#d8e2b5] text-black text-xs font-medium md:text-lg my-5 transition-all duration-300 ease-in-out
        border-[1px] border-[#bec5b6] 
  `}
          style={{
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          onClick={() => {
            audioRef?.current?.play();
            setStarted(true);
          }}
          hidden={started}
        >
          CLICK FOR DETAILS
        </button>
      </div>
      {/* Apply the Gotham-Light font to the button */}
    </div>
  );
}
