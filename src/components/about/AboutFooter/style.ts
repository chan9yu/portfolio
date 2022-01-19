import styled from '@emotion/styled'

export const AboutFooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.footer__header {
		display: flex;
		flex-direction: column;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
			color: ${({ theme }) => theme.colors.fontColor};
		}
		> hr {
			width: 65px;
			border: 1px solid ${({ theme }) => theme.colors.primary};
			margin: 5px 0 0 0;
		}
	}
	.footer__text {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.xl};
		line-height: 1.6;
		.primary {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`
