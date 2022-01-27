module.exports = {
	siteMetadata: {
		title: `프론트엔드 개발자 여찬규 포트폴리오`,
		description: `안녕하세요 프론트엔드 개발자 여찬규 입니다!`,
		author: `Changyu`,
		siteUrl: `https://changyu-portfolio.netlify.app/`
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
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Noto+Sans+KR\:100,300,400,500,700,900`, `Outfit\:500`],
				display: 'swap'
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
}
