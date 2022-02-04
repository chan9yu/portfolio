import React, { FC } from 'react'
import styled from '@emotion/styled'

import RootWrapper from 'components/common/RootWrapper'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

const Container = styled.div`
	padding-top: 130px;
	background-color: var(--bg_color_page2);
	transition: color 0.2s ease-out, background-color 0.2s ease-out;
	.content_box {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		gap: 100px;
		.main_content {
			width: 65%;
		}
	}
`

const AppLayout: FC = ({ children }) => {
	return (
		<RootWrapper>
			<Container>
				<Header />
				<div className="content_box">
					<div className="main_content">{children}</div>
				</div>
				<Footer />
			</Container>
		</RootWrapper>
	)
}

export default AppLayout
