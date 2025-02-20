import Image from "next/image";
import Head from "@/components/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const audioRef = useRef<any>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/Ash - Acoustic Live (mp3cut.net).mp3");
      audioRef.current = audio;

      // Attempt to play the audio automatically
      const playAudio = () => {
        audio
          .play()
          .then(() => {
            console.log("Autoplay started");
            setMuted(true);
          })
          .catch(() => console.log("Autoplay blocked"));

        audio.loop = true;
      };

      // If autoplay is blocked, wait for user interaction
      document.addEventListener("click", playAudio, { once: true });

      return () => {
        document.removeEventListener("click", playAudio);
        audio.pause();
        setMuted(false);
      };
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  w-full bg-[#f6efe4]  ">
      <Head />
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full  transition-all duration-300 ease-in-out opacity-70"
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setMuted(audioRef.current.muted);
          }
        }}
      >
        {muted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>

      <div className="w-full bg-[#f6efe4] flex items-center justify-center snap-start relative max-w-screen-sm ">
        <Image
          src="/Yara and Amr's Wedding Invitation (3)-1.png"
          alt="Next.js logo"
          layout="responsive"
          width={3000} // Original image width
          height={11491} // Original image height
          priority
          hidden={!started}
        />
        <Link
          href="https://maps.app.goo.gl/LDYf7bW1FHvPmsHc8"
          target="_blank"
          className="font-[emoji] font-semibold text-[#876e5e] px-6 py-[0.25rem] rounded-full bg-[#dfb374]  hover:bg-[#ddb072]  text-[0.65rem] md:text-xl  transition-all duration-300 ease-in-out text-center"
          style={{
            position: "absolute",
            bottom: "29%",
            left: "50%",
            // width: "22%",
            transform: "translateX(-50%)",
          }}
        >
          CLICK FOR LOCATION
        </Link>
        <Link
          href="/form"
          className="font-[emoji] font-semibold text-[#876e5e] px-6 py-[0.2rem] rounded-full bg-[#dfb374]  hover:bg-[#ddb072]  text-[0.65rem] md:text-xl  transition-all duration-300 ease-in-out text-center"
          style={{
            position: "absolute",
            bottom: "24.36%",
            left: "50%",
            // width: "22%",
            transform: "translateX(-50%)",
          }}
        >
          CLICK TO RSVP
        </Link>
        <Link
          href="https://mywishlists.io/wishs/view/004RcDuGDWe5RfkXLLNNckEM"
          target="_blank"
          className="font-[emoji] font-semibold text-[#876e5e] px-6 py-[0.2rem] rounded-full bg-[#dfb374]  hover:bg-[#ddb072]  text-[0.65rem] md:text-xl  transition-all duration-300 ease-in-out text-center w-max"
          style={{
            position: "absolute",
            bottom: "8.1%",
            left: "50%",
            // width: "22%",
            transform: "translateX(-50%)",
          }}
        >
          CLICK FOR OUR GIFT REGISTRY
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
          className={`font-montserrat px-3 py-1 rounded-full bg-[#b5c7a0]  hover:bg-[#d8e2b5] text-black text-xs font-medium md:text-lg my-5 transition-all duration-300 ease-in-out
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
