import styled from '@emotion/styled'

export const SkillContainer = styled.div`
	width: 80%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	row-gap: 60px;
	column-gap: 50px;
	@media ${({ theme }) => theme.device.tabletL} {
		width: 100%;
		row-gap: 40px;
		column-gap: 30px;
	}
	@media ${({ theme }) => theme.device.tablet} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		grid-template-columns: repeat(3, 1fr);
		row-gap: 30px;
	}
	.skill__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		transition: 0.5s;
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 5px;
		}
		&:hover {
			filter: brightness(70%);
		}
		cursor: pointer;
		.skill__imgbox {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.colors.bgColor};
			display: flex;
			justify-content: center;
			align-items: center;
			> img {
				width: 60%;
			}
		}
	}
	.skill__name {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.base};
		font-weight: 100;
		@media ${({ theme }) => theme.device.mobileL} {
			font-size: 12px;
		}
	}
`
