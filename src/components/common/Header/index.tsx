import React from 'react'
import styled from '@emotion/styled'

import AutoSearch from './AutoSearch'
import Logo from '../Logo'
import PageMenu from '../PageMenu'
import HeaderMenu from './HeaderMenu'

const HeaderWrapper = styled.header`
	padding: 30px 0;
	display: flex;
	flex-direction: column;
	gap: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	.header__container {
		padding: 0 50px;
		display: flex;
		justify-content: space-between;
		.header__left {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
`

const Header = () => {
	return (
		<HeaderWrapper>
			<div className="header__container">
				<div className="header__left">
					<Logo size="big" />
					<AutoSearch />
				</div>
				<PageMenu />
			</div>
			<HeaderMenu />
		</HeaderWrapper>
	)
}

export default Header
