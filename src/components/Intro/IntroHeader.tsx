import React from 'react'
import styled from '@emotion/styled'

import Logo from 'components/common/Logo'

const PROFILE_IMG =
	'https://avatars.githubusercontent.com/u/80776262?v=4' as const

const HeaderWarpper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;
`

const PageMenus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	.page_menus_btn {
		width: 110px;
		padding: 5px 0;
		border-radius: 5px;
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.fontColor};
		font-weight: 100;
		font-family: 'Noto Sans KR';
		transition: 0.5s;
		background-color: transparent;
		&:hover {
			background-color: ${({ theme }) => theme.colors.bgColor};
		}
	}
`

const AboutMenus = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	.about_menus_btn {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.fontColor};
		background-color: transparent;
	}
	.about_menus_img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		cursor: pointer;
	}
	& > * {
		transition: 0.5s;
		&:hover {
			filter: brightness(70%);
		}
	}
`

const IntroHeaderWarpperHeader = () => {
	return (
		<HeaderWarpper>
			<Logo />
			<PageMenus>
				<button className="page_menus_btn">ABOUT</button>
				<button className="page_menus_btn">PORTFOLIO</button>
			</PageMenus>
			<AboutMenus>
				<button className="about_menus_btn">BLOG</button>
				<button className="about_menus_btn">GITHUB</button>
				<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
			</AboutMenus>
		</HeaderWarpper>
	)
}

export default IntroHeaderWarpperHeader
