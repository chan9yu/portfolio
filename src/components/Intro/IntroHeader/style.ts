import styled from '@emotion/styled'

export const HeaderWarpper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px;
	box-sizing: border-box;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.introBgColor};
	position: relative;
	z-index: 10;
	@media ${({ theme }) => theme.device.tabletL} {
		padding: 10px 30px;
	}
`

export const AboutMenus = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	@media ${({ theme }) => theme.device.tabletL} {
		gap: 20px;
	}
	.about_menus_btn {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.fontColor};
		background-color: transparent;
	}
	.about_menus_img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		@media ${({ theme }) => theme.device.tabletL} {
			width: 25px;
			height: 25px;
		}
	}
	& > * {
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			filter: brightness(70%);
		}
	}
`

export const MenuBtn = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.gray};
		transition: 0.2s;
		transform: translateY(-6px);
		box-shadow: 0 6px 0 ${({ theme }) => theme.colors.gray};
	}
	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.gray};
		transition: 0.2s;
		transform: translateY(6px);
	}
	&.active {
		&::before {
			content: '';
			background-color: ${({ theme }) => theme.colors.primary};
			box-shadow: 0 0px 0 ${({ theme }) => theme.colors.primary};
			transform: translateY(0) rotate(45deg);
		}
		&::after {
			content: '';
			background-color: ${({ theme }) => theme.colors.primary};
			transform: translateY(0) rotate(-45deg);
		}
	}
`

export const MobileMenu = styled.div`
	z-index: 1;
	position: absolute;
	top: 50px;
	opacity: 0;
	transform: translateY(-50px);
	transition: 0.3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	&.active {
		opacity: 1;
		transform: translateY(0px);
	}
`
