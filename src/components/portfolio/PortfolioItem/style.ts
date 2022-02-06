import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const ProtfolioCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const ProtfolioLink = styled(Link)`
	display: flex;
`

export const ThumbnailImage = styled.img`
	width: 400px;
	height: 200px;
`

export const ProtfolioInfo = styled.div`
	display: flex;
	flex-direction: column;
`
