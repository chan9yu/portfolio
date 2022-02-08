import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

export const HeaderWrapper = styled.header`
	width: 100%;
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-bottom: 2px solid var(--hr);
	background-color: var(--bg_color_page2);
	transition: color 0.2s ease-out, background-color 0.2s ease-out;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	@media ${({ theme }) => theme.device.mobileL} {
		padding-top: 10px;
	}
	.header__container {
		padding: 0 50px;
		display: flex;
		gap: 20px;
		align-items: center;
		@media ${({ theme }) => theme.device.mobileL} {
			padding: 0 30px;
			flex-direction: column;
			gap: 10px;
		}
	}
`

export const HeaderMenu = styled.div`
	width: 79%;
	margin: 0 auto;
	display: flex;
	gap: 20px;
	position: relative;
	padding-bottom: 15px;
`

export const MenuGroup = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Menu = styled.div<{ active: boolean }>`
	display: flex;
	align-items: center;
	gap: 8px;
	color: ${({ active }) => active && 'var(--primary)'};
	transition: 0.3s ease-in-out;
	&:hover {
		filter: brightness(70%);
	}
	svg {
		fill: ${({ active }) => active && 'var(--primary)'};
	}
`

export const Point = styled(motion.div)`
	position: absolute;
	bottom: 0;
	width: 70px;
	border: 2px solid var(--primary);
	margin-top: 10px;
`
