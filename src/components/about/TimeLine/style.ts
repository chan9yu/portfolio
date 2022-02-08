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
			}
			> span {
				color: var(--primary);
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 100;
			}
		}
		> hr {
			width: 65px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
			@media ${({ theme }) => theme.device.mobileL} {
				width: 40px;
			}
		}
	}
`

export const TimeLineWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 60px;
	font-size: ${({ theme }) => theme.fontSizes.xl};
	.timeline__item_box {
		display: flex;
		flex-direction: column;
		gap: 20px;
		@media ${({ theme }) => theme.device.mobileL} {
			gap: 10px;
		}
		.timeline__item_content {
			display: flex;
			gap: 30px;
			.timeline__item_date {
				width: 18%;
				color: var(--gray);
			}
			.timeline__item_sub_title {
				width: 78%;
				display: flex;
				flex-direction: column;
				gap: 10px;
				.timeline__item_description {
					font-size: ${({ theme }) => theme.fontSizes.base};
				}
			}
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 30px;
	}
`
