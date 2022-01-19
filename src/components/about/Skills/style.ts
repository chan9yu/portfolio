import styled from '@emotion/styled'

export const SkillsContainer = styled.div`
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
				color: ${({ theme }) => theme.colors.fontColor};
			}
			> span {
				color: ${({ theme }) => theme.colors.primary};
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 100;
			}
		}
		> hr {
			width: 65px;
			border: 1px solid ${({ theme }) => theme.colors.primary};
			margin: 5px 0 0 0;
		}
	}
`

export const SkillWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	> span {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
	.skill__box {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 30px;
		.skill__item {
			width: 157px;
			height: 157px;
			border-radius: 10px;
			border: 1px solid ${({ theme }) => theme.colors.gray};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			cursor: pointer;
			transition: 0.5s;
			> img {
				width: 42%;
			}
			> span {
				color: ${({ theme }) => theme.colors.fontColor};
			}
			&:hover {
				border: 1px solid ${({ theme }) => theme.colors.primary};
			}
		}
	}
`
