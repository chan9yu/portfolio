import styled from '@emotion/styled'

export const InputContainer = styled.div`
	width: 100%;
	height: 50px;
	border: 1px solid var(--hr);
	border-radius: 25px;
	box-shadow: inset 0px 1px 5px 0 rgba(0, 0, 0, 0.1);
	position: relative;
	display: flex;
	align-items: center;
	@media ${({ theme }) => theme.device.mobileL} {
		height: 40px;
	}
	.search__icon {
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translateY(-50%);
		@media ${({ theme }) => theme.device.mobileL} {
			left: 12px;
		}
	}
	.input__text {
		font-size: ${({ theme }) => theme.fontSizes.xl};

		font-weight: 500;
		padding: 10px 0 10px 50px;
		@media ${({ theme }) => theme.device.mobileL} {
			padding: 10px 0 10px 40px;
		}
	}
	.mic__icon {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		@media ${({ theme }) => theme.device.mobileL} {
			right: 12px;
		}
	}
`
