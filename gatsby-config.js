module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				allExtensions: true
			}
		},
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
				// The values for each key in this example are the defaults the plugin uses.
				sourceMap: true,
				autoLabel: 'dev-only',
				labelFormat: `[local]`,
				cssPropOptimization: true
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
}
