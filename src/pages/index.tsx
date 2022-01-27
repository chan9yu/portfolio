import React from 'react'
import styled from '@emotion/styled'

import RootWrapper from 'components/common/RootWrapper'
import Footer from 'components/common/Footer'
import IntroHeader from 'components/Intro/IntroHeader'
import IntroContent from 'components/Intro/IntroContent'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.introBgColor};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
	@media ${({ theme }) => theme.device.mobileL} {
		width: 100%;
		height: calc(100%);
	}
`

const IndexPage = () => {
	return (
		<RootWrapper>
			<Container>
				<IntroHeader />
				<IntroContent />
				<Footer />
			</Container>
		</RootWrapper>
	)
}

export default IndexPage
