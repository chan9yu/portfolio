import { ChangeEvent, useCallback, useRef } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { HiSun, HiMoon } from 'react-icons/hi'

const Container = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 10;
	cursor: pointer;
`

const Switch = styled.div<{ isDark: boolean }>`
	background-color: var(--hr);
	display: flex;
	border-radius: 50px;
	padding: 15px 10px;
	cursor: pointer;
`

const Theme = styled(motion.div)`
	width: 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	box-sizing: border-box;
`

interface ThemeType {
	theme: string
	toggleTheme: (theme: string) => void
}

const ThemeToggleBtn = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const onToggleTheme = useCallback(
		(toggleTheme: ThemeType[toggleTheme]) =>
			(e: ChangeEvent<HTMLInputElement>) => {
				toggleTheme(e.target.checked ? 'dark' : 'light')
			},
		[]
	)

	const onClick = useCallback(() => inputRef.current?.click(), [])

	return (
		<Container>
			<ThemeToggler>
				{({ theme, toggleTheme }: ThemeType) => (
					<Switch onClick={onClick}>
						<input
							ref={inputRef}
							hidden
							type="checkbox"
							onChange={onToggleTheme(toggleTheme)}
							checked={theme === 'dark'}
						/>
						{theme === 'dark' ? (
							<Theme layoutId="theme">
								<HiSun />
								<span>라이트모드</span>
							</Theme>
						) : (
							<Theme layoutId="theme">
								<HiMoon />
								<span>다크모드</span>
							</Theme>
						)}
					</Switch>
				)}
			</ThemeToggler>
		</Container>
	)
}

export default ThemeToggleBtn
