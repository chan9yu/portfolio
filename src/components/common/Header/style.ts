import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
	width: 100%;
	padding: 30px 0 15px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-bottom: 1px solid var(--gray);
	background-color: ${({ theme }) => theme.colors.bgColor};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	.header__container {
		padding: 0 50px;
		display: flex;
		justify-content: space-between;
		.header__left {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
`
