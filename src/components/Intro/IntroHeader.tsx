import React from 'react'
import styled from '@emotion/styled'
import { FaGithub, FaBlog } from 'react-icons/fa'

import Logo from 'components/common/Logo'
import PageMenu from 'components/common/PageMenu'

const PROFILE_IMG =
	'https://avatars.githubusercontent.com/u/80776262?v=4' as const

const HeaderWarpper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

const AboutMenus = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	.about_menus_btn {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.fontColor};
		background-color: transparent;
	}
	.about_menus_img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}
	& > * {
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			filter: brightness(70%);
		}
	}
`

const IntroHeaderWarpperHeader = () => {
	return (
		<HeaderWarpper>
			<Logo size="base" />
			{/* common 으로 옮기기 */}
			<PageMenu />
			<AboutMenus>
				<FaBlog fill="#ddd" size={25} />
				<FaGithub fill="#ddd" size={25} />
				<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
			</AboutMenus>
		</HeaderWarpper>
	)
}

export default IntroHeaderWarpperHeader
