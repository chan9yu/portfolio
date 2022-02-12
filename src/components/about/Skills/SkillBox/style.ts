import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
	@media ${({ theme }) => theme.device.NoteBook} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${({ theme }) => theme.device.tablet} {
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		grid-template-columns: repeat(2, 1fr);
		gap: 18px;
	}
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
		width: 50%;
	}
	.skill__name {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		font-weight: 500;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		height: 150px;
	}
`

export const ActiveItem = styled(Item)`
	width: auto;
	height: auto;
	background-color: var(--bg_color_page1);
	justify-content: flex-start;
	align-items: flex-start;
	padding: 20px;
	.acive_header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
		.acive_title {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
	}
	.active_description {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: ${({ theme }) => theme.fontSizes.lg};
		> div {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 80%;
		height: auto;
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
