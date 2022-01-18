import styled from '@emotion/styled'
import React, { FC } from 'react'

const LogoWrapper = styled.span<{ size: 'title' | 'base' }>`
	font-family: 'JuliusSansOne';
	font-size: ${({ theme, size }) =>
		size === 'title' ? theme.fontSizes.bigTitleSize : theme.fontSizes.xl};
	font-weight: 100;
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

interface Props {
	size: 'title' | 'base'
}

const Logo: FC<Props> = ({ size }) => {
	return (
		<LogoWrapper size={size}>
			<span>CHAN</span>GYU
		</LogoWrapper>
	)
}

export default Logo
