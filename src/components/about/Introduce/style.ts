import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.introducen__header {
		display: flex;
		flex-direction: column;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
		}
		> hr {
			width: 115px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
		}
	}
	.introducen__title {
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		> span {
			font-weight: 800;
			color: var(--primary);
		}
	}
	.color_primary {
		color: var(--primary);
	}
`

export const CardWrapper = styled.div`
	width: 100%;
	height: 350px;
	position: relative;
`

export const ButtonGroup = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	gap: 5px;
`

export const Button = styled.button`
	color: var(--text);
	font-size: ${({ theme }) => theme.fontSizes.base};
	background-color: transparent;
	border: 1px solid var(--gray);
	border-radius: 5px;
	padding: 8px 12px;
	cursor: pointer;
	z-index: 9;
	transition: 0.5s;
	&:hover {
		border: 1px solid var(--primary);
		color: var(--primary);
	}
`

export const Card = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: auto;
	background-color: var(--gray_2);
	border-radius: 10px;
	box-shadow: inset 0px 3px 15px 0 rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.xxl};
		margin-bottom: 10px;
	}
	> div {
		display: flex;
		flex-direction: column;
	}
`

export const Indicator = styled.span`
	position: absolute;
	right: 20px;
	bottom: 20px;
	color: var(--gray);
`
