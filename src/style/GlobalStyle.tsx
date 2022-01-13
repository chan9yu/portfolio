import React, { FC } from 'react'
import reset from 'styled-reset'
import { Global, css } from '@emotion/react'

const DefaultStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
	${reset}
	html {
		font-size: 100%;
	}
	body {
		background: #f5f5f5;
		overflow-x: hidden;
		line-height: 1.4;
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 1em;
		box-sizing: border-box;
		color: #333;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none !important;
		}
	}
	a {
		color: #1abc9c;
		font-weight: 300;
		text-decoration: none;
		transition: 0.5s;
		& :hover {
			color: #16a085;
		}
	}
	@media (min-width: 300px) {
		html {
			font-size: 60%;
		}
	}
	@media (min-width: 500px) {
		html {
			font-size: 75%;
		}
	}
	@media (min-width: 700px) {
		html {
			font-size: 90%;
		}
	}
	@media (min-width: 1200px) {
		html {
			font-size: 100%;
		}
	}
`

const GlobalStyle: FC = () => {
	return <Global styles={DefaultStyle} />
}

export default GlobalStyle
