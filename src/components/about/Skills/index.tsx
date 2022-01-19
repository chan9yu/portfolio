import React, { useMemo } from 'react'

import { SkillsContainer, SkillWrapper } from './style'

const Skills = () => {
	const frontEndItems = useMemo(
		() => [
			{ name: 'HTML5', img: '/fe/html.png' },
			{ name: 'CSS3', img: '/fe/css.png' },
			{ name: 'JavaScript', img: '/fe/javascript.png' },
			{ name: 'Typescript', img: '/fe/typescript.png' },
			{ name: 'React', img: '/fe/react.png' },
			{ name: 'Redux', img: '/fe/redux.png' },
			{ name: 'Next', img: '/fe/next.png' },
			{ name: 'Vue', img: '/fe/vue.png' },
			{ name: 'Nuxt', img: '/fe/nuxt.png' }
		],
		[]
	)

	const backEndItems = useMemo(
		() => [
			{ name: 'NodeJs', img: '/be/nodejs.png' },
			{ name: 'Express', img: '/be/express.png' },
			{ name: 'MongoDB', img: '/be/mongodb.png' },
			{ name: 'Mongoose', img: '/be/mongoose.png' },
			{ name: 'MySQL', img: '/be/mysql.png' },
			{ name: 'Sequelize', img: '/be/sequelize.png' }
		],
		[]
	)

	return (
		<SkillsContainer>
			<div className="skill__header">
				<div className="skill__header_title">
					<h2>SKILLS</h2>
					<span>마우스를 갖다 대면 자세히 볼 수 있어요!</span>
				</div>
				<hr />
			</div>
			<SkillWrapper>
				<span>Front-End</span>
				<div className="skill__box">
					{frontEndItems.map(item => (
						<div key={item.name} className="skill__item">
							<img src={item.img} alt={item.name} />
							<span>{item.name}</span>
						</div>
					))}
				</div>
			</SkillWrapper>
			<SkillWrapper>
				<span>Back-End</span>
				<div className="skill__box">
					{backEndItems.map(item => (
						<div key={item.name} className="skill__item">
							<img src={item.img} alt={item.name} />
							<span>{item.name}</span>
						</div>
					))}
				</div>
			</SkillWrapper>
		</SkillsContainer>
	)
}

export default Skills
