import React, { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Logo from 'components/common/Logo'
import PageMenu from 'components/common/PageMenu'
import AboutMenus from 'components/common/AboutMenus'
import { HeaderWarpper, MenuBtn, MobileMenu } from './style'

const IntroHeader = () => {
	const isMobile = useMediaQuery({ query: '(max-width:425px)' })

	const [isMenu, setIsMenu] = useState(false)
	const onClickToggleIsMenu = useCallback(() => setIsMenu(prev => !prev), [])

	useEffect(() => {
		if (!isMobile) setIsMenu(false)
	}, [isMobile])

	return (
		<>
			<HeaderWarpper>
				<Logo size="xl" />
				<PageMenu intro hide />
				<MenuBtn
					className={isMenu ? 'active' : null}
					onClick={onClickToggleIsMenu}
				/>
				<AboutMenus hide />
			</HeaderWarpper>
			<MobileMenu className={isMenu ? 'active' : null}>
				<PageMenu intro />
				<AboutMenus />
			</MobileMenu>
		</>
	)
}

export default IntroHeader
