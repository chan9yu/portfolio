import { FC } from 'react'

import { Container } from './style'
import 'github-markdown-css'

interface Props {
	html: string
}

const PortfolioContent: FC<Props> = ({ html }) => {
	return (
		<Container>
			<article
				className="markdown-body"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</Container>
	)
}

export default PortfolioContent
