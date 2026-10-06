import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.vanewijkzonwering.nl" },
      { protocol: "https", hostname: "3325.cdn.simplo7.net" },
      { protocol: "https", hostname: "images.tcdn.com.br" },
      { protocol: "https", hostname: "acdn-us.mitiendanube.com" },
      { protocol: "https", hostname: "media.hornbach.de" },
      { protocol: "https", hostname: "shop0662.sfstatic.io" },
      { protocol: "https", hostname: "product-hub-prd.madeiramadeira.com.br" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" }
    ]
  }
};

export default nextConfig;
