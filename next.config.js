const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/Web3-Conference-Tokyo/" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};
