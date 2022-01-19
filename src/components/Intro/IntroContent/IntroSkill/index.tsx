import React, { useMemo } from 'react'
import { RiAddFill } from 'react-icons/ri'

import { SkillContainer } from './style'

const IntroSkill = () => {
	const skills = useMemo(
		() => [
			{ name: 'HTML5', img: '/fe/html.png' },
			{ name: 'CSS3', img: '/fe/css.png' },
			{ name: 'JavaScript', img: '/fe/javascript.png' },
			{ name: 'TypeScript', img: '/fe/tyepscript.png' },
			{ name: 'React', img: '/fe/react.png' },
			{ name: 'Redux', img: '/fe/redux.png' },
			{ name: 'Next', img: '/fe/next.png' },
			{ name: 'Vue', img: '/fe/vue.png' },
			{ name: 'Nuxt', img: '/fe/nuxt.png' },
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
