import React, { useMemo } from 'react'
import { RiAddFill } from 'react-icons/ri'

import { SkillContainer } from './style'

const IntroSkill = () => {
	const skills = useMemo(
		() => [
			{ name: 'HTML', img: '/html.png' },
			{ name: 'CSS3', img: '/css.png' },
			{ name: 'JavaScript', img: '/javascript.png' },
			{ name: 'TypeScript', img: '/tyepscript.png' },
			{ name: 'React', img: '/react.png' },
			{ name: 'Redux', img: '/redux.png' },
			{ name: 'Next', img: '/next.png' },
			{ name: 'Vue', img: '/vue.png' },
			{ name: 'Nuxt', img: '/nuxt.png' },
			{ name: '더 보기', img: '' }
		],
		[]
	)

	return (
		<SkillContainer>
			{skills.map(skill => (
				<div className="skill__item" key={skill.name}>
					<div className="skill__imgbox">
						{skill.img ? (
							<img src={skill.img} alt={skill.name} />
						) : (
							<RiAddFill fill="#fff" size={20} />
						)}
					</div>
					<span className="skill__name">{skill.name}</span>
				</div>
			))}
		</SkillContainer>
	)
}

export default IntroSkill
