import { FC } from 'react'

import {
	ProtfolioCard,
	ProtfolioInfo,
	ProtfolioLink,
	ThumbnailImage
} from './style'

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
		<ProtfolioCard>
			<ProtfolioLink to={'/'}>
				<ThumbnailImage src={thumbnail.publicURL} alt="Portfolio Item Image" />
			</ProtfolioLink>
			<ProtfolioInfo>
				<h2>{title}</h2>
				<span>{summary}</span>
			</ProtfolioInfo>
		</ProtfolioCard>
	)
}

export default PortfolioItem
