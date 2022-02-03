import React, { FC } from 'react'
import { FaGithub, FaBlog } from 'react-icons/fa'
import styled from '@emotion/styled'

interface Props {
	hide: boolean
}

export const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	gap: 30px;
	> a {
		height: 25px;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		gap: 20px;
		> a {
			height: 20px;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		display: ${({ hide }) => hide && 'none'};
	}
	.about_menus_img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			filter: brightness(70%);
		}
		@media ${({ theme }) => theme.device.tabletL} {
			width: 25px;
			height: 25px;
		}
	}
`

const BlogIcon = styled(FaBlog)`
	fill: var(--text);
	width: 25px;
	height: 25px;
	transition: 0.3s;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(70%);
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 20px;
		height: 20px;
	}
`

const GithubIcon = styled(FaGithub)`
	fill: var(--text);
	width: 25px;
	height: 25px;
	transition: 0.3s;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: brightness(70%);
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 20px;
		height: 20px;
	}
`

const AboutMenus: FC<Props> = ({ hide }) => {
	const PROFILE_IMG =
		'https://avatars.githubusercontent.com/u/80776262?v=4' as const

	return (
		<Container hide={hide}>
			<BlogIcon />
			<a
				href="https://github.com/changyuyeo"
				target="_blank"
				rel="noreferrer noopener"
			>
				<GithubIcon />
			</a>
			<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
		</Container>
	)
}

export default AboutMenus
