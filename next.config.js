/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const { version } = require('./package.json')

module.exports = {
	env: {
		version,
	},
}
