module.exports = {
	launch: {
		headless: true,
		sloMo: 10,
		devtools: false,
		defaultViewport: null,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
		// defaultViewport: {
		// 	width:  1920,
		// 	height: 1080
		// }
	},
	browserContext: 'default',
}
