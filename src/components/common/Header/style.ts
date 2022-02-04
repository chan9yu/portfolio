import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
	width: 100%;
	padding: 30px 0 15px;
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
