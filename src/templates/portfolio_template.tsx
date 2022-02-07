import { FC } from 'react'
import { graphql } from 'gatsby'

import { IPortfolioItemType } from 'types/PortfolioItem.types'
import AppLayout from 'components/layout/AppLayout'
import PortfolioContent from 'components/portfolio/PortfolioContent'

interface Props {
	data: {
		allMarkdownRemark: {
			edges: IPortfolioItemType[]
		}
	}
}

const PortfolioTemplate: FC<Props> = ({ data }) => {
	const { html } = data.allMarkdownRemark.edges[0].node

	return (
		<AppLayout>
			<PortfolioContent html={html} />
		</AppLayout>
	)
}

export default PortfolioTemplate

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
			edges {
				node {
					html
					frontmatter {
						title
						type
						skills {
							fe
							be
						}
						description
					}
				}
			}
		}
	}
`
