import styled from '@emotion/styled'
import React from 'react'

const LogoWrapper = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-family: 'JuliusSansOne';
	color: ${({ theme }) => theme.colors.fontColor};
	cursor: pointer;
	transition: 0.5s;
	> span {
		color: ${({ theme }) => theme.colors.primary};
	}
	&:hover {
		filter: brightness(70%);
	}
`

const Logo = () => {
	return (
		<LogoWrapper>
			<span>CHAN</span>GYU
		</LogoWrapper>
	)
}

export default Logo
