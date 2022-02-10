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
		}
		> hr {
			width: 65px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
			@media ${({ theme }) => theme.device.mobileL} {
				width: 25px;
			}
		}
	}
	.footer__text {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		line-height: 1.6;
		.primary {
			color: var(--primary);
		}
	}
`
