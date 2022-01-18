import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'

import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'

const RootWrapper: FC = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</>
	)
}

export default RootWrapper
