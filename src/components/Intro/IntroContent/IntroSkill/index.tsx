import React, { useMemo } from 'react'
import { Link } from 'gatsby'

import skills from 'assets/data/skills'
import { AddIcon, SkillBox, SkillContainer, SkillTooltip } from './style'

const IntroSkill = () => {
	const boxVariants = useMemo(
		() => ({
			start: {
				opacity: 0,
				scale: 0.5
			},
			end: {
				opacity: 1,
				scale: 1,
				transition: {
					type: 'spring',
					duration: 0.3,
					bounce: 0.8,
					delayChildren: 0.1,
					staggerChildren: 0.2
				}
			}
		}),
		[]
	)

	const skillVariants = useMemo(
		() => ({
			start: {
				opacity: 0,
				y: 10
			},
			end: {
				opacity: 1,
				y: 0
			}
		}),
		[]
	)

	return (
		<SkillContainer variants={boxVariants} initial="start" animate="end">
			{skills.map((skill, index) => (
				<SkillBox
					key={skill.name}
					index={skills.length - index}
					variants={skillVariants}
				>
					<SkillTooltip description={skill.description}>
						{skill.img ? (
							<img src={skill.img} alt={skill.name} />
						) : (
							<Link to="/about">
								<AddIcon size={20} />
							</Link>
						)}
					</SkillTooltip>
					<span className="skill__name">{skill.name}</span>
				</SkillBox>
			))}
		</SkillContainer>
	)
}

export default IntroSkill
