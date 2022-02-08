import { useState, useMemo, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import introductions from 'assets/data/about/introductions'
import {
	Button,
	ButtonGroup,
	Card,
	CardWrapper,
	Container,
	Indicator
} from './style'

const Introduce = () => {
	const [visible, setVisible] = useState(0)
	const [back, setBack] = useState(false)

	const nextCard = useCallback(() => {
		setBack(false)
		setVisible(prev =>
			prev === introductions.length - 1 ? introductions.length - 1 : prev + 1
		)
	}, [])

	const prevCard = useCallback(() => {
		setBack(true)
		setVisible(prev => (prev === 0 ? 0 : prev - 1))
	}, [])

	const cardVariants = useMemo(
		() => ({
			entry: (isBack: boolean) => ({
				x: isBack ? -500 : 500,
				opacity: 0,
				transition: {
					duration: 0.3
				}
			}),
			center: {
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.3
				}
			},
			exit: (isBack: boolean) => ({
				x: isBack ? 500 : -500,
				opacity: 0,
				transition: {
					duration: 0.3
				}
			})
		}),
		[]
	)

	return (
		<Container>
			<div className="introducen__header">
				<h2>INTRODUCE</h2>
				<hr />
			</div>
			<h1 className="introducen__title">
				안녕하세요! <br /> <span>프론트엔드</span> 개발자 <br /> 여찬규 입니다.
			</h1>
			<CardWrapper>
				<ButtonGroup>
					<Button onClick={prevCard}>prev</Button>
					<Button onClick={nextCard}>next</Button>
				</ButtonGroup>
				<AnimatePresence initial={false} custom={back}>
					{introductions.map(
						(introduction, i) =>
							visible === i && (
								<Card
									key={introduction.title}
									variants={cardVariants}
									custom={back}
									initial="entry"
									animate="center"
									exit="exit"
								>
									<h2>{introduction.title}</h2>
									{introduction.content.map((content, index) => (
										<div key={index}>
											{content.map(v => (
												<span key={v}>{v}</span>
											))}
										</div>
									))}
									<Indicator>
										{visible + 1}/{introductions.length}
									</Indicator>
								</Card>
							)
					)}
				</AnimatePresence>
			</CardWrapper>
		</Container>
	)
}

export default Introduce
