import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ProtfolioCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`

export const ProtfolioLink = styled(Link)`
	display: flex;
`

export const ThumbnailImage = styled(GatsbyImage)`
	width: 100%;
	border-radius: 5px;
`

export const ProtfolioInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	.card_header {
		display: flex;
		align-items: flex-end;
		gap: 5px;
		h2 {
			font-size: ${({ theme }) => theme.fontSizes.big};
		}
	}
`

export const SkillBox = styled.div`
	display: flex;
	gap: 5px;
`

export const SkillItem = styled.div`
	padding: 2px 5px;
	background-color: var(--gray);
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSizes.small};
`

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	background-color: var(--gray_2);
	padding: 10px;
	border-radius: 5px;
	span {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`
