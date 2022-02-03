import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const LogoWrapper = styled.span<{ size: 'bigTitleSize' | 'big' | 'xl' }>`
	font-family: 'Outfit', sans-serif;
	font-size: ${({ theme, size }) => theme.fontSizes[size]};
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
	.logo_color_1 {
		color: var(--logo_color_1);
	}
	.logo_color_2 {
		color: var(--logo_color_2);
	}
	.logo_color_3 {
		color: var(--logo_color_3);
	}
	.logo_color_4 {
		color: var(--logo_color_4);
	}
	.logo_color_5 {
		color: var(--logo_color_5);
	}
	.logo_color_6 {
		color: var(--logo_color_6);
	}
	.logo_color_7 {
		color: var(--logo_color_7);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: ${({ size }) => size === 'xl' && '15px'};
	}
`

interface Props {
	size: 'bigTitleSize' | 'big' | 'xl'
}

const Logo: FC<Props> = ({ size }) => {
	return (
		<LogoWrapper size={size}>
			<Link to="/">
				<span className="logo_color_1">C</span>
				<span className="logo_color_2">h</span>
				<span className="logo_color_3">a</span>
				<span className="logo_color_4">n</span>
				<span className="logo_color_5">g</span>
				<span className="logo_color_6">y</span>
				<span className="logo_color_7">u</span>
			</Link>
		</LogoWrapper>
	)
}

export default Logo
