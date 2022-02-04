import styled from '@emotion/styled'

export const SearchWrapper = styled.div`
	width: 694px;
	height: 50px;
	box-sizing: border-box;
	background-color: var(--bg_color_page1);
	box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.2);
	padding: 15px 20px;
	border-radius: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	> span {
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
	.search__icons {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 10px 0;
		.search__vertical_line {
			border: 1px solid var(--gray);
			height: 28px;
		}
	}
`
