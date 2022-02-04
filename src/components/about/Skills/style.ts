import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.skill__header {
		display: flex;
		flex-direction: column;
		.skill__header_title {
			display: flex;
			align-items: center;
			gap: 10px;
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
			}
			> span {
				color: var(--primary);
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 100;
			}
		}
		> hr {
			width: 65px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
		}
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 25px;
`

export const Item = styled(motion.div)`
	width: 100%;
	height: 200px;
	background-color: var(--gray_2);
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	> img {
		width: 45%;
	}
	.skill__name {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		font-weight: 500;
	}
`

export const ActiveItem = styled(Item)`
	width: 600px;
	background-color: var(--bg_color_page1);
	justify-content: flex-start;
	align-items: flex-start;
	padding: 20px;
	.acive_header {
		display: flex;
		align-items: center;
		gap: 10px;
		.acive_title {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
	}
	.active_description {
		display: flex;
		flex-direction: column;
		font-size: ${({ theme }) => theme.fontSizes.lg};
	}
`

export const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20;
`
