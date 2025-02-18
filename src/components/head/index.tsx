import NextHead from "next/head";
import React from "react";

type HeadProps = {
  title?: string;
  description?: string | null;
  image?: string;
  children?: React.ReactNode;
};

const Head: React.FC<HeadProps> = ({ children }) => {
  const defaultDescription =
    "Join us and our families as we celebrate our love with the people we love. All wedding details are in this link.";
  const defaultImg = `/open-graph.png`;

  return (
    <NextHead>
      <title>{"Maria and Karim are getting married!"}</title>
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={"Maria and Karim are getting married!"}
      />
      <meta itemProp="name" content={"Maria and Karim are getting married!"} />
      <meta itemProp="description" content={defaultDescription} />
      <meta property="og:description" content={defaultDescription} />
      <meta itemProp="image" content={defaultImg} />
      <meta property="og:image" content={defaultImg} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:title"
        content="Maria and Karim are getting married!"
      />
      {children}
    </NextHead>
  );
};

export default Head;
