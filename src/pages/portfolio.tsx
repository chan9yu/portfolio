import { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { IPortfolioItemType } from 'types/PortfolioItem.types'
import AppLayout from 'components/layout/AppLayout'
import PortfolioList from 'components/portfolio/PortfolioList'

const Container = styled.div`
	margin: 50px 0 100px;
`

interface Props {
	data: {
		allMarkdownRemark: {
			edges: IPortfolioItemType[]
		}
	}
}

const PortfolioPage: FC<Props> = ({ data }) => {
	const { edges } = data.allMarkdownRemark
	console.log(edges)

	return (
		<AppLayout>
			<Container>
				<PortfolioList portfolios={edges} />
			</Container>
		</AppLayout>
	)
}

export default PortfolioPage

export const getProtfolioList = graphql`
	query getProtfolioList {
		allMarkdownRemark {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						type
						skills {
							fe
							be
						}
						description
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 400, height: 225)
							}
						}
					}
				}
			}
		}
	}
`
