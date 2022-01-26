import React from 'react'

import Logo from '../Logo'
import PageMenu from '../PageMenu'
import AutoSearch from './AutoSearch'
import HeaderMenu from './HeaderMenu'
import { HeaderWrapper } from './style'

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
