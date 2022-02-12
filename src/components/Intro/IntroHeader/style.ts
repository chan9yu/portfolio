import styled from '@emotion/styled'

export const HeaderWarpper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px;
	box-sizing: border-box;
	border-bottom: 1px solid var(--hr);
	background-color: transparent;
	position: relative;
	z-index: 10;
	@media ${({ theme }) => theme.device.tabletL} {
		padding: 10px 30px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		margin-bottom: 46px;
	}
`

export const MenuBtn = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	display: none;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	@media ${({ theme }) => theme.device.mobileL} {
		display: flex;
	}
	&::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: var(--gray);
		transition: 0.2s;
		transform: translateY(-6px);
		box-shadow: 0 6px 0 var(--gray);
	}
	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: var(--gray);
		transition: 0.2s;
		transform: translateY(6px);
	}
	&.active {
		&::before {
			content: '';
			background-color: var(--primary);
			box-shadow: 0 0px 0 var(--primary);
			transform: translateY(0) rotate(45deg);
		}
		&::after {
			content: '';
			background-color: var(--primary);
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
	border-bottom: 1px solid var(--hr);
	&.active {
		opacity: 1;
		transform: translateY(0px);
	}
`
