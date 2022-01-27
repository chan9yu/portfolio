import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
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
		@media ${({ theme }) => theme.device.tabletL} {
			width: 25px;
			height: 25px;
		}
	}
	& > * {
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			filter: brightness(70%);
		}
	}
`

const AboutMenus: FC<Props> = ({ hide }) => {
	const isTable = useMediaQuery({ query: '(max-width: 1024px)' })

	const PROFILE_IMG =
		'https://avatars.githubusercontent.com/u/80776262?v=4' as const

	return (
		<Container hide={hide}>
			<FaBlog fill="#ddd" size={isTable ? 20 : 25} />
			<a
				href="https://github.com/changyuyeo"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FaGithub fill="#ddd" size={isTable ? 20 : 25} />
			</a>
			<img className="about_menus_img" src={PROFILE_IMG} alt="profile_img" />
		</Container>
	)
}

export default AboutMenus
