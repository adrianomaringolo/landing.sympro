/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const { version } = require('./package.json')

module.exports = {
	env: {
		version,
	},
	images: {
		formats: ['image/webp'],
		minimumCacheTTL: 31536000,
	},
	compress: true,
}
