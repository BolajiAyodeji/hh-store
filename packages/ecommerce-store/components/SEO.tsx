import React from "react";
import NextHead from "next/head";

type Props = {
  productName?: string;
  productImage?: string;
  productUrl?: string;
};

const title = process.env.NEXT_PUBLIC_SITE_NAME || "Commerce Layer Sanity Template";
const description = "The Headless Hashnode multipurpose e-commerce emporium.";
const keywords = "Commerce Layer, Reactjs, Nextjs, Sanity Studio, Hashnode, Headless Hashnode";
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://commercelayer-sanity-template.netlify.app";
const twitterHandle = "@hashnode";
const ogImage = "/preview.jpg";
const favicon = "/favicon.jpg";
const touchIcon = "/seo/ios/192.png";

const SEOHead: React.FunctionComponent<Props> = ({ productName, productImage, productUrl }) => {
  return (
    <NextHead>
      <title>{productName ? `${productName} | ${title}` : title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#713f12" />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={productUrl ? `${url}/${productUrl}` : url} />
      <meta property="og:title" content={productName ? `${productName} | ${title}` : title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={productImage ? productImage : ogImage} />
      <meta property="og:image:width" content="900" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:image" content={productImage ? productImage : ogImage} />
      <meta name="twitter:image:alt" content="Commerce Layer Sanity Starter Logo" />
      <meta name="twitter:description" content={description} />

      <link rel="apple-touch-icon" sizes="192x192" href={touchIcon} />
      <meta name="application-name" content={productName ? `${productName} | ${title}` : title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={productName ? `${productName} | ${title}` : title}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="none" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-tap-highlight" content="yes" />

      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="theme-color" content="#713f12" />
    </NextHead>
  );
};

export default SEOHead;
