import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Container = styled.div<{ intro: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
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
			background-color: ${({ theme, intro }) =>
				intro ? theme.colors.bgColor : theme.colors.introBgColor};
		}
		@media ${({ theme }) => theme.device.mobileL} {
			width: auto;
			padding: 5px 10px;
		}
	}
`

interface Props {
	intro: boolean
}

const PageMenu: FC<Props> = ({ intro }) => {
	return (
		<Container intro={intro}>
			<button className="page_menus_btn">
				<Link to="/about">ABOUT</Link>
			</button>
			<button className="page_menus_btn">PORTFOLIO</button>
		</Container>
	)
}

export default PageMenu
