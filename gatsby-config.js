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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
}
