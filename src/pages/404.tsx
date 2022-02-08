import { StaticImage } from 'gatsby-plugin-image'
import { useLocation } from '@reach/router'
import styled from '@emotion/styled'

import Logo from 'components/common/Logo'
import RootWrapper from 'components/common/RootWrapper'
import { Link } from 'gatsby'

const Container = styled.div`
	background-color: var(--bg_color_page1);
	height: 100vh;
	transition: color 0.2s ease-out, background-color 0.2s ease-out;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: auto 100px;
	@media ${({ theme }) => theme.device.tablet} {
		margin: auto 80px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		flex-direction: column-reverse;
		margin: auto 40px;
	}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	strong {
		font-weight: 600;
	}
`

const GoToTheHomeBtn = styled(Link)`
	border-radius: 5px;
	padding: 8px 0;
	transition: 0.5s;
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: var(--text);
	background-color: var(--bg_color_page2);
	display: flex;
	justify-content: center;
	&:hover {
		filter: brightness(70%);
	}
`

const NotFoundPage = () => {
	const { pathname } = useLocation()

	return (
		<RootWrapper>
			<Container>
				<Wrapper>
					<Content>
						<Logo size="big" />
						<span>
							<strong>404.</strong> That's an error.
						</span>
						<div>
							<span>
								The requested URL {pathname} was not found on this server.
							</span>
							<span>That’s all we know.</span>
						</div>
						<GoToTheHomeBtn to="/">Go to the main page</GoToTheHomeBtn>
					</Content>
					<StaticImage
						src="../assets/images/error.png"
						alt="error"
						placeholder="blurred"
					/>
				</Wrapper>
			</Container>
		</RootWrapper>
	)
}

export default NotFoundPage
