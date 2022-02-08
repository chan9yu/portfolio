import styled from '@emotion/styled'
import { FiMic, FiSearch, FiX } from 'react-icons/fi'

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
		text-align: left;
	}
	.search__icons {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 10px 0;
		.search__vertical_line {
			border: 1px solid var(--gray);
			height: 28px;
			@media ${({ theme }) => theme.device.tablet} {
				height: 20px;
			}
			@media ${({ theme }) => theme.device.mobileL} {
				display: none;
			}
		}
		@media ${({ theme }) => theme.device.tablet} {
			gap: 5px;
			padding: 5px 0;
		}
		svg {
			font-size: 20px;
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: 15px;
			}
		}
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 100%;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 0 20px;
		height: 40px;
		justify-content: flex-start;
		gap: 10px;
		position: relative;
	}
`

export const FiXIcon = styled(FiX)`
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 14px;
		position: absolute;
		right: 20px;
	}
`

export const SearchIcon = styled(FiSearch)`
	@media ${({ theme }) => theme.device.mobileL} {
		display: none;
	}
`

export const MicIcon = styled(FiMic)`
	@media ${({ theme }) => theme.device.mobileL} {
		display: none;
	}
`

export const MobileSearchIcon = styled(FiSearch)`
	display: none;
	@media ${({ theme }) => theme.device.mobileL} {
		display: block;
		font-size: 14px;
	}
`
