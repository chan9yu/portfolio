import styled from '@emotion/styled'

export const ProfileCardWrapper = styled.div`
	margin-top: 50px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	display: flex;
	flex-direction: column;
	.card__header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
		.card__header_info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 20px;
			color: ${({ theme }) => theme.colors.fontColor};
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
				font-weight: 600;
			}
			> span {
				font-size: ${({ theme }) => theme.fontSizes.base};
				font-weight: 100;
			}
		}
		> img {
			width: 178px;
			height: 178px;
		}
	}
	.card__description {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		> h3 {
			color: ${({ theme }) => theme.colors.primary};
			font-size: ${({ theme }) => theme.fontSizes.lg};
			font-weight: 300;
		}
		> span {
			color: ${({ theme }) => theme.colors.fontColor};
			line-height: 1.8;
			font-weight: 100;
		}
	}
`
