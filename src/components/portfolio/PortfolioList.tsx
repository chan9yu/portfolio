import { FC } from 'react'
import styled from '@emotion/styled'

import PortfolioItem from './PortfolioItem'
import { IPortfolioItemType } from 'types/PortfolioItem.types'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 40px;
`

interface Props {
	portfolios: IPortfolioItemType[]
}

const PortfolioList: FC<Props> = ({ portfolios }) => {
	return (
		<Wrapper>
			{portfolios.map(({ node: { id, frontmatter, fields } }) => {
				console.log(fields.slug)
				return <PortfolioItem key={id} {...frontmatter} link={fields.slug} />
			})}
		</Wrapper>
	)
}

export default PortfolioList
