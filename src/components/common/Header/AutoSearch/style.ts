import styled from '@emotion/styled'
import theme from 'styles/theme'

export const SearchWrapper = styled.div`
	width: 694px;
	height: 50px;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.introBgColor};
	padding: 15px 20px;
	border-radius: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	> span {
		color: ${({ theme }) => theme.colors.fontColor};
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
	.search__icons {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 10px 0;
		.search__vertical_line {
			border: 1px solid ${({ theme }) => theme.colors.gray};
			height: 28px;
		}
	}
`
