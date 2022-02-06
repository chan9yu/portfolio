import React, { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { frontEndItems, backEndItems } from 'assets/data/about/skillItems'
import { Item, Container, Wrapper, Grid, Overlay, ActiveItem } from './style'

const Skills = () => {
	const [id, setId] = useState<string | null>(null)

	const onOpen = useCallback(
		(boxId: string) => () => {
			setId(boxId)
		},
		[]
	)

	const onClose = useCallback(() => setId(null), [])

	const feItemCurrentIndex = useCallback(
		(name: string) => frontEndItems.findIndex(item => item.name === name),
		[]
	)

	return (
		<Container>
			<div className="skill__header">
				<div className="skill__header_title">
					<h2>SKILLS</h2>
					<span>아이템을 클릭하면 자세히 볼 수 있어요!</span>
				</div>
				<hr />
			</div>
			<Wrapper>
				<span>Front-End</span>
				<Grid>
					{frontEndItems.map(item => (
						<Item
							key={item.name}
							layoutId={item.name}
							onClick={onOpen(item.name)}
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
							<ActiveItem layoutId={id}>
								<div className="acive_header">
									<img
										src={frontEndItems[feItemCurrentIndex(id)].img}
										alt={frontEndItems[feItemCurrentIndex(id)].name}
									/>
									<span className="acive_title">
										{frontEndItems[feItemCurrentIndex(id)].name}
									</span>
								</div>
								<div className="active_description">
									{frontEndItems[feItemCurrentIndex(id)].content.map(v => (
										<span key={v}>{v}</span>
									))}
								</div>
							</ActiveItem>
						</Overlay>
					)}
				</AnimatePresence>
			</Wrapper>
		</Container>
	)
}

export default Skills
