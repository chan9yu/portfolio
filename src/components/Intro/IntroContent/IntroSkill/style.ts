import styled from '@emotion/styled'

export const SkillContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	row-gap: 60px;
	column-gap: 50px;
	.skill__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		transition: 0.5s;
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
		}
	}
	.skill__name {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.base};
		font-weight: 100;
	}
`
