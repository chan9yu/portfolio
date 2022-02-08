import { FC, useCallback, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

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
						<img src={item.img} alt={item.name} />
						<span className="skill__name">{item.name}</span>
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
								<img
									src={items[feItemCurrentIndex(id)].img}
									alt={items[feItemCurrentIndex(id)].name}
								/>
								<span className="acive_title">
									{items[feItemCurrentIndex(id)].name}
								</span>
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
