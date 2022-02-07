const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
	const output = getConfig().output || {}

	actions.setWebpackConfig({
		output,
		resolve: {
			alias: {
				assets: path.resolve(__dirname, 'src/assets'),
				components: path.resolve(__dirname, 'src/components'),
				hooks: path.resolve(__dirname, 'src/hooks'),
				styles: path.resolve(__dirname, 'src/styles')
			}
		}
	})
}

// 마크다운 데이터에 Slug 필드 추가 (onCreateNode API 사용)
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode })

		createNodeField({ node, name: 'slug', value: slug })
	}
}

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	// Get All Markdown File For Paging
	const queryAllMarkdownData = await graphql(
		`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`
	)

	// Handling GraphQL Query Error
	if (queryAllMarkdownData.errors) {
		reporter.panicOnBuild(`Error while running query`)
		return
	}

	// Import Post Template Component
	const PostTemplateComponent = path.resolve(
		__dirname,
		'src/templates/portfolio_template.tsx'
	)

	// Page Generating Function
	const generatePostPage = ({
		node: {
			fields: { slug }
		}
	}) => {
		const pageOptions = {
			path: `portfolio${slug}`,
			component: PostTemplateComponent,
			context: { slug }
		}

		createPage(pageOptions)
	}

	// Generate Post Page And Passing Slug Props for Query
	queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}
