import React, { FC } from 'react'
import styled from '@emotion/styled'

import RootWrapper from 'components/common/RootWrapper'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import ProfileCard from 'components/common/ProfileCard'

const Container = styled.div`
	padding-top: 130px;
	background-color: ${({ theme }) => theme.colors.bgColor};
	.content_box {
		width: 79.1%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		gap: 100px;
		.main_content {
			width: 65%;
		}
		.profile_card {
			width: 35%;
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
					<div className="profile_card">
						<ProfileCard />
					</div>
				</div>
				<Footer />
			</Container>
		</RootWrapper>
	)
}

export default AppLayout
