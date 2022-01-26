import React, { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaGithub, FaBlog } from 'react-icons/fa'

import Logo from 'components/common/Logo'
import PageMenu from 'components/common/PageMenu'
import { AboutMenus, HeaderWarpper, MenuBtn, MobileMenu } from './style'

const PROFILE_IMG =
	'https://avatars.githubusercontent.com/u/80776262?v=4' as const

const IntroHeader = () => {
	const isTable = useMediaQuery({ query: '(max-width: 1024px)' })
	const isMobile = useMediaQuery({ query: '(max-width:425px)' })

	const [isMenu, setIsMenu] = useState(false)
	const onClickToggleIsMenu = useCallback(() => setIsMenu(prev => !prev), [])

	useEffect(() => {
		if (!isMobile) setIsMenu(false)
	}, [isMobile])

	const aboutMenu = (
		<AboutMenus>
			<FaBlog fill="#ddd" size={isTable ? 20 : 25} />
			<a
				href="https://github.com/changyuyeo"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FaGithub fill="#ddd" size={isTable ? 20 : 25} />
			</a>
			<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
		</AboutMenus>
	)

	return (
		<>
			<HeaderWarpper>
				<Logo size="xl" />
				{isMobile ? (
					<MenuBtn
						className={isMenu ? 'active' : null}
						onClick={onClickToggleIsMenu}
					/>
				) : (
					<>
						<PageMenu intro />
						{aboutMenu}
					</>
				)}
			</HeaderWarpper>
			<MobileMenu className={isMenu ? 'active' : null}>
				<PageMenu intro />
				{aboutMenu}
			</MobileMenu>
		</>
	)
}

export default IntroHeader
