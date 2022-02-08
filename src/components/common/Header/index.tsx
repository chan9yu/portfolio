import { FaSearch, FaPortrait } from 'react-icons/fa'
import { useMatch } from '@reach/router'

import Logo from '../Logo'
import AutoSearch from './AutoSearch'
import { HeaderWrapper, HeaderMenu, Menu, Point, MenuGroup } from './style'

const Header = () => {
	const aboutMatch = useMatch('/about')
	const portfolioMatch = useMatch('/portfolio') || useMatch('/portfolio/:id')

	return (
		<HeaderWrapper>
			<div className="header__container">
				<Logo size="big" />
				<AutoSearch />
			</div>
			<HeaderMenu>
				<MenuGroup to="/about">
					<Menu active={Boolean(aboutMatch)}>
						<FaSearch />
						ABOUT
					</Menu>
					{aboutMatch && <Point />}
				</MenuGroup>
				<MenuGroup to="/portfolio">
					<Menu active={Boolean(portfolioMatch)}>
						<FaPortrait />
						PORTFOLIO
					</Menu>
					{portfolioMatch && <Point />}
				</MenuGroup>
			</HeaderMenu>
		</HeaderWrapper>
	)
}

export default Header
