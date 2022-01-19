import styled from '@emotion/styled'

export const HeaderWarpper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const AboutMenus = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	.about_menus_btn {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.fontColor};
		background-color: transparent;
	}
	.about_menus_img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}
	& > * {
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			filter: brightness(70%);
		}
	}
`
