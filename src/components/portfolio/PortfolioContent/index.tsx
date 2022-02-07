import React, { FC } from 'react'
import 'github-markdown-css'
import { Container } from './style'

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
