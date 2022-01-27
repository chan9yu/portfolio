const path = require('path')

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
	const output = getConfig().output || {}

	actions.setWebpackConfig({
		output,
		resolve: {
			alias: {
				assets: path.resolve(__dirname, 'src/assets'),
				components: path.resolve(__dirname, 'src/components'),
				utils: path.resolve(__dirname, 'src/utils'),
				hooks: path.resolve(__dirname, 'src/hooks'),
				styles: path.resolve(__dirname, 'src/styles')
			}
		}
	})
}
