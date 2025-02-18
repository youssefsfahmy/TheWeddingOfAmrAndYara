import Head from "@/components/head";
import Image from "next/image";
import Link from "next/link";
function Index() {
  return (
    <div className="h-screen w-screen bg-[#fefcf1] items-center justify-items-center">
      <Head />

      <Link
        href={"/"}
        className="flex justify-center w-full h-[140px] max-w-screen-sm mb-[10px] shadow-md"
      >
        <Image
          src="/formbanner.jpeg"
          alt="Next.js logo"
          layout="responsive"
          width={2358} // Original image width
          height={4154} // Original image height
          priority
          className="justify-self-center object-cover object-center"
        />
      </Link>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdUnOUG6DNycOC84FSuEPlVhgQHOWTnPsEfhsfYjmlVxZoSPA/viewform?embedded=true"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{
          position: "relative",
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "calc(100% - 150px)",
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          zIndex: 999999,
        }}
        className="iframe"
        lang="en"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Index;
