import React, { FC } from 'react'
import GlobalStyle from 'style/GlobalStyle'

const AppLayout: FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	)
}

export default AppLayout
