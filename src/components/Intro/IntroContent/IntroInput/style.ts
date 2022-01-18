import styled from '@emotion/styled'

export const InputContainer = styled.div`
	width: 568px;
	height: 50px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 25px;
	position: relative;
	.search__icon {
		position: absolute;
		top: 15px;
		left: 20px;
	}
	.input__text {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		color: ${({ theme }) => theme.colors.fontColor};
		font-weight: 300;
		padding: 10px 0 10px 50px;
	}
	.mic__icon {
		position: absolute;
		top: 15px;
		right: 20px;
	}
`
