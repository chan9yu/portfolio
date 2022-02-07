import { FC } from 'react'
import { MarkdownRenderer } from './style'

interface Props {
	html: string
}

const PortfolioContent: FC<Props> = ({ html }) => {
	return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PortfolioContent
