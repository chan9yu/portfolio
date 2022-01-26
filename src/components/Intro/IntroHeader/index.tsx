import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaGithub, FaBlog } from 'react-icons/fa'

import Logo from 'components/common/Logo'
import PageMenu from 'components/common/PageMenu'
import { AboutMenus, HeaderWarpper } from './style'

const PROFILE_IMG =
	'https://avatars.githubusercontent.com/u/80776262?v=4' as const

const IntroHeader = () => {
	const isTable = useMediaQuery({ query: '(max-width: 1024px)' })

	return (
		<HeaderWarpper>
			<Logo size="xl" />
			<PageMenu intro />
			<AboutMenus>
				<FaBlog fill="#ddd" size={isTable ? 20 : 25} />
				<FaGithub fill="#ddd" size={isTable ? 20 : 25} />
				<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
			</AboutMenus>
		</HeaderWarpper>
	)
}

export default IntroHeader
