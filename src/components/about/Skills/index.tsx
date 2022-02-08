import styled from '@emotion/styled'

import { frontEndItems, backEndItems } from 'assets/data/about/skillItems'
import SkillBox from './SkillBox'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.skill__header {
		display: flex;
		flex-direction: column;
		.skill__header_title {
			display: flex;
			align-items: center;
			gap: 10px;
			> h2 {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 600;
			}
			> span {
				color: var(--primary);
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 100;
			}
		}
		> hr {
			width: 65px;
			border: 1px solid var(--primary);
			margin: 5px 0 0 0;
			@media ${({ theme }) => theme.device.mobileL} {
				width: 30px;
			}
		}
	}
`

const Skills = () => {
	return (
		<Container>
			<div className="skill__header">
				<div className="skill__header_title">
					<h2>SKILLS</h2>
					<span>아이템을 클릭하면 자세히 볼 수 있어요!</span>
				</div>
				<hr />
			</div>
			<SkillBox items={frontEndItems} title="Front-End" />
			<SkillBox items={backEndItems} title="Back-End" />
		</Container>
	)
}

export default Skills
