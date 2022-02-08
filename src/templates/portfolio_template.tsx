import { FC } from 'react'
import { BsFillBackspaceFill, BsGithub } from 'react-icons/bs'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import { IPortfolioItemType } from 'types/PortfolioItem.types'
import AppLayout from 'components/layout/AppLayout'
import PortfolioContent from 'components/portfolio/PortfolioContent'

const Container = styled.div`
	margin-top: 50px;
	display: flex;
	align-items: center;
	gap: 10px;
`

const BackPageBtn = styled(Link)`
	margin-left: 45px;
	background-color: var(--logo_color_2);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	border-radius: 50px;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
	span {
		color: #eee;
	}
	@media only screen and (max-width: 767px) {
		margin-left: 15px;
	}
`

const GithubBtn = styled.a`
	background-color: var(--gray);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	border-radius: 50px;
	transition: 0.3s;
	cursor: pointer;
	&:hover {
		filter: brightness(70%);
	}
	span {
		color: #eee;
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
	const { html, frontmatter } = data.allMarkdownRemark.edges[0].node

	return (
		<AppLayout>
			<Container>
				<BackPageBtn to="/portfolio">
					<BsFillBackspaceFill fill="#eee" />
					<span>뒤로가기</span>
				</BackPageBtn>
				<GithubBtn
					href={frontmatter.link}
					target="_blank"
					rel="noreferrer noopener"
				>
					<BsGithub fill="#eee" />
					<span>저장소 가기</span>
				</GithubBtn>
			</Container>
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
						link
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
