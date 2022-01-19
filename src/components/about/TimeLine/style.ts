import styled from '@emotion/styled'

export const TimeLineContainer = styled.div`
	.timeline__header {
		display: flex;
		flex-direction: column;
		.timeline__header_title {
			display: flex;
			align-items: center;
			gap: 10px;
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
				color: ${({ theme }) => theme.colors.fontColor};
			}
			> span {
				color: ${({ theme }) => theme.colors.primary};
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 100;
			}
		}
		> hr {
			width: 65px;
			border: 1px solid ${({ theme }) => theme.colors.primary};
			margin: 5px 0 0 0;
		}
	}
`

export const TimeLineWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 60px;
	color: ${({ theme }) => theme.colors.fontColor};
	font-size: ${({ theme }) => theme.fontSizes.xl};
	.timeline__item_box {
		display: flex;
		flex-direction: column;
		gap: 20px;
		.timeline__item_content {
			display: flex;
			gap: 30px;
			.timeline__item_date {
				width: 18.45%;
				color: ${({ theme }) => theme.colors.gray};
			}
			.timeline__item_sub_title {
				width: 78.23%;
				display: flex;
				flex-direction: column;
				gap: 10px;
				.timeline__item_description {
					font-size: ${({ theme }) => theme.fontSizes.base};
				}
			}
		}
	}
`
