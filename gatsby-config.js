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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-smartypants',
						options: {
							dashes: 'oldschool'
						}
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 768,
							quality: 100,
							withWebp: true
						}
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {}
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
							rel: 'nofollow'
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: ['auto', 'webp'],
					quality: 100,
					placeholder: 'blurred'
				}
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-image`
	]
}
