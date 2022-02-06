import { FC } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const ProtfolioWrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const ProtfolioCard = styled.div`
	display: flex;
`

export const ThumbnailImage = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 10px 10px 0 0;
`

interface Props {
	title: string
	summary: string
	date: string
	categories: string[]
	thumbnail: {
		publicURL: string
	}
}

const PortfolioItem: FC<Props> = props => {
	const { title, summary, date, categories, thumbnail } = props

	return (
		<ProtfolioWrapper to={'/'}>
			<ProtfolioCard>
				<ThumbnailImage src={thumbnail.publicURL} alt="Portfolio Item Image" />
				<span>{title}</span>
				<span>{summary}</span>
			</ProtfolioCard>
		</ProtfolioWrapper>
	)
}

export default PortfolioItem
