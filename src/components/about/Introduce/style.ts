import styled from '@emotion/styled'

export const IntroduceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	.introducen__header {
		display: flex;
		flex-direction: column;
		> h2 {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			font-weight: 600;
			color: ${({ theme }) => theme.colors.fontColor};
		}
		> hr {
			width: 115px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
		}
	}
	.introducen__title {
		font-size: ${({ theme }) => theme.fontSizes.titleSize};
		color: ${({ theme }) => theme.colors.fontColor};
		> span {
			font-weight: 800;
			color: var(--primary);
		}
	}
	.introducen__content {
		display: flex;
		flex-direction: column;
		gap: 30px;
		color: ${({ theme }) => theme.colors.fontColor};
		.color_primary {
			color: var(--primary);
		}
	}
`
