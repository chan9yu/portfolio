import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from '@emotion/styled'

const Container = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 10;
	cursor: pointer;
`

const ThemeToggleBtn = () => {
	return (
		<Container>
			<ThemeToggler>
				{({ theme, toggleTheme }) => (
					<label>
						<input
							type="checkbox"
							onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
							checked={theme === 'dark'}
						/>
						Dark mode
					</label>
				)}
			</ThemeToggler>
		</Container>
	)
}

export default ThemeToggleBtn
