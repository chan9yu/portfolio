import React from 'react'
import { RiAddFill } from 'react-icons/ri'
import { Link } from 'gatsby'

import skills from 'assets/data/skills'
import { SkillBox, SkillContainer, SkillTooltip } from './style'

const IntroSkill = () => {
	return (
		<SkillContainer>
			{skills.map((skill, index) => (
				<SkillBox key={skill.name} index={skills.length - index}>
					<SkillTooltip description={skill.description}>
						{skill.img ? (
							<img src={skill.img} alt={skill.name} />
						) : (
							<Link to="/about">
								<RiAddFill fill="#fff" size={20} />
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
