import { FC, useMemo } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

import { IPortfolioItemType } from 'types/PortfolioItem.types'
import PortfolioItem from './PortfolioItem'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	> span {
		color: var(--primary);
	}
`

const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 40px;
`

interface Props {
	portfolios: IPortfolioItemType[]
}

const PortfolioList: FC<Props> = ({ portfolios }) => {
	const wrapperVariants = useMemo(
		() => ({
			start: { opacity: 0, scale: 0.5 },
			end: {
				opacity: 1,
				scale: 1,
				transition: {
					type: 'spring',
					duration: 0.5,
					bounce: 0.5,
					delayChildren: 0.5,
					staggerChildren: 0.2
				}
			}
		}),
		[]
	)

	const itemVariants = useMemo(
		() => ({
			start: { opacity: 0, y: 10 },
			end: { opacity: 1, y: 0 }
		}),
		[]
	)

	return (
		<Container>
			<span>* 각 썸네일을 클릭하면 자세히 볼 수 있어요!</span>
			<Wrapper variants={wrapperVariants} initial="start" animate="end">
				{portfolios.map(({ node: { id, frontmatter, fields } }) => (
					<motion.div key={id} variants={itemVariants}>
						<PortfolioItem {...frontmatter} link={`.${fields.slug}`} />
					</motion.div>
				))}
			</Wrapper>
		</Container>
	)
}

export default PortfolioList
