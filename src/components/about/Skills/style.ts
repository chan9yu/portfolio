import styled from '@emotion/styled'

export const SkillsContainer = styled.div`
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

export const SkillWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
	.skill__box {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 30px;
	}
`

export const SkillItem = styled.div`
	width: 157px;
	height: 157px;
	border-radius: 10px;
	border: 1px solid var(--gray);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: 0.3s;
	position: relative;
	> img {
		width: 42%;
	}
	> span {
	}
	&::before {
		content: 'test';
		background-color: #000000b2;

		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
	}
	&:hover {
		border: 1px solid var(--primary);
		&::before {
			opacity: 1;
			transition: 0.3s;
		}
	}
`
