/** @type {import('next').NextConfig} */
module.exports = {
	serverRuntimeConfig: {
		CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
		CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN,
	},
	reactStrictMode: true,
};
