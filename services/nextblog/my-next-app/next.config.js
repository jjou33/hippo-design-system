const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@hippods/react-components-accordion"],
}

module.exports = withVanillaExtract(nextConfig)
