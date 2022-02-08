import { FaSearch, FaPortrait } from 'react-icons/fa'
import { Link } from 'gatsby'
import { useMatch } from '@reach/router'

import Logo from '../Logo'
import AutoSearch from './AutoSearch'
import { HeaderWrapper, HeaderMenu, Menu, Point } from './style'

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
				<Link to="/about">
					<Menu active={Boolean(aboutMatch)}>
						<FaSearch />
						ABOUT
					</Menu>
					{aboutMatch && <Point layoutId="point" />}
				</Link>
				<Link to="/portfolio">
					<Menu active={Boolean(portfolioMatch)}>
						<FaPortrait />
						PORTFOLIO
					</Menu>
					{portfolioMatch && <Point layoutId="point" />}
				</Link>
			</HeaderMenu>
		</HeaderWrapper>
	)
}

export default Header
