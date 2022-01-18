import React from 'react'

import styled from '@emotion/styled'
import RootWrapper from 'components/common/RootWrapper'
import IntroHeader from 'components/Intro/IntroHeader'

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.introBgColor};
`

const IndexPage = () => {
	return (
		<RootWrapper>
			<Container>
				<IntroHeader />
			</Container>
		</RootWrapper>
	)
}

export default IndexPage
