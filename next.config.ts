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
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "image.chukouplus.com" },
      { protocol: "https", hostname: "www.facilpersianas.com.br" },
      { protocol: "https", hostname: "dukaan.b-cdn.net" },
      { protocol: "https", hostname: "cdn.leroymerlin.com.br" },
      { protocol: "https", hostname: "d1z3kpk3b2dxg.cloudfront.net" },
      { protocol: "https", hostname: "images.homify.com" },
      { protocol: "https", hostname: "www.globaltoldos.com.br" },
      { protocol: "https", hostname: "swdecor.com.br" }
    ]
  }
};

export default nextConfig;
