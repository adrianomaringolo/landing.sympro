/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const { version } = require('./package.json')

const withPWA = require('next-pwa')({
	dest: 'public',
})

module.exports = withPWA({
	env: {
		version,
	},
})
