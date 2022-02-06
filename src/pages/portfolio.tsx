import { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import AppLayout from 'components/layout/AppLayout'
import PortfolioList, {
	ProtfolioType
} from 'components/portfolio/PortfolioList'

const Container = styled.div`
	height: 100vh;
`

interface Props {
	data: {
		allMarkdownRemark: {
			edges: ProtfolioType[]
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
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							publicURL
						}
					}
				}
			}
		}
	}
`
