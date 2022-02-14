import { FC, useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Item, Wrapper, Grid, Overlay, ActiveItem } from './style'

interface Props {
	items: {
		name: string
		img: string
		content: string[]
	}[]
	title: string
}

const SkillBox: FC<Props> = ({ items, title }) => {
	const [id, setId] = useState<string | null>(null)

	const onOpen = useCallback(
		(boxId: string) => () => {
			setId(boxId)
		},
		[]
	)

	const onClose = useCallback(() => setId(null), [])

	const feItemCurrentIndex = useCallback(
		(name: string) => items.findIndex(item => item.name === name),
		[]
	)

	const itemVariants = useMemo(
		() => ({
			hover: { scale: 1.1 }
		}),
		[]
	)

	return (
		<Wrapper>
			<span>{title}</span>
			<Grid>
				{items.map(item => (
					<Item
						key={item.name}
						layoutId={`item-${item.name}`}
						onClick={onOpen(item.name)}
						variants={itemVariants}
						whileHover="hover"
					>
						<motion.img
							src={item.img}
							alt={item.name}
							layoutId={`img-${item.name}`}
						/>
						<motion.span
							layoutId={`title-${item.name}`}
							className="skill__name"
						>
							{item.name}
						</motion.span>
					</Item>
				))}
			</Grid>
			<AnimatePresence initial={false}>
				{id && (
					<Overlay
						initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
						animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
						exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
						onClick={onClose}
					>
						<ActiveItem layoutId={`item-${id}`}>
							<div className="acive_header">
								<motion.img
									src={items[feItemCurrentIndex(id)].img}
									alt={items[feItemCurrentIndex(id)].name}
									layoutId={`img-${id}`}
								/>
								<motion.span layoutId={`title-${id}`} className="acive_title">
									{items[feItemCurrentIndex(id)].name}
								</motion.span>
							</div>
							<div className="active_description">
								{items[feItemCurrentIndex(id)].content.map(v => (
									<span key={v}>{v}</span>
								))}
							</div>
						</ActiveItem>
					</Overlay>
				)}
			</AnimatePresence>
		</Wrapper>
	)
}

export default SkillBox
