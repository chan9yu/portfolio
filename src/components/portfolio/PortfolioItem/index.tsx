import { FC } from 'react'
import { BsPinAngleFill } from 'react-icons/bs'
import { IPortfolioFrontmatterType } from 'types/PortfolioItem.types'

import {
	Description,
	ProtfolioCard,
	ProtfolioInfo,
	ProtfolioLink,
	SkillBox,
	SkillItem,
	ThumbnailImage
} from './style'

interface Props extends IPortfolioFrontmatterType {
	link: string
}

const PortfolioItem: FC<Props> = props => {
	const { title, type, skills, description, thumbnail, link } = props

	return (
		<ProtfolioCard>
			<ProtfolioLink to={link}>
				<ThumbnailImage
					image={thumbnail.childImageSharp.gatsbyImageData}
					alt="Portfolio Item Image"
				/>
			</ProtfolioLink>
			<ProtfolioInfo>
				<div className="card_header">
					<h2>{title}</h2>
					<span>{type === 'team' ? '팀프로젝트' : '개인프로젝트'}</span>
				</div>
				{skills.fe[0] && (
					<SkillBox>
						<span>front-end</span>
						{skills.fe.map(v => (
							<SkillItem key={v}>{v}</SkillItem>
						))}
					</SkillBox>
				)}
				{skills.be[0] && (
					<SkillBox>
						<span>back-end</span>
						{skills.be.map(v => (
							<SkillItem key={v}>{v}</SkillItem>
						))}
					</SkillBox>
				)}
				<Description>
					{description.map(v => (
						<span key={v}>
							<BsPinAngleFill />
							{v}
						</span>
					))}
				</Description>
			</ProtfolioInfo>
		</ProtfolioCard>
	)
}

export default PortfolioItem
