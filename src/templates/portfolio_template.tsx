import { FC } from 'react'
import { graphql, Link } from 'gatsby'

import { IPortfolioItemType } from 'types/PortfolioItem.types'
import AppLayout from 'components/layout/AppLayout'
import PortfolioContent from 'components/portfolio/PortfolioContent'
import { BsFillBackspaceFill } from 'react-icons/bs'
import styled from '@emotion/styled'

const BackPageBtn = styled(Link)`
	position: absolute;
	top: 150px;
	left: 80px;
	width: auto;
	background-color: var(--gray);
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px;
	border-radius: 50px;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		left: 55px;
	}
`

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
			<BackPageBtn to="/portfolio">
				<BsFillBackspaceFill />
				<span>뒤로가기</span>
			</BackPageBtn>
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
