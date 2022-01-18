import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
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

const PageMenu = () => {
	return (
		<Container>
			<button className="page_menus_btn">ABOUT</button>
			<button className="page_menus_btn">PORTFOLIO</button>
		</Container>
	)
}

export default PageMenu
