import React, { FC } from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

const DefaultStyle = css`
	${emotionReset}
	html {
		font-size: 100%;
	}
	body {
		overflow-x: hidden;
		line-height: 1.4;
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 1em;
		box-sizing: border-box;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none !important;
		}
		button {
			cursor: pointer;
		}
		input,
		button {
			border: none;
			&:focus,
			&:active {
				outline: none;
				box-shadow: none;
			}
		}
		a {
			text-decoration: none;
		}
		* {
			color: var(--text);
		}
	}
	body {
		--bg_color_page1: #fff;
		--bg_color_page2: #fff;
		--text: #333;
		--gray: #707070;
		--hr: #e3e4e8;
		--primary: #d35400;
	}

	body.dark {
		-webkit-font-smoothing: antialiased;
		--bg_color_page1: #35363a;
		--bg_color_page2: #202124;
		--text: #eee;
		--gray: #707070;
		--hr: #707070;
		--primary: #d35400;
	}
	@font-face {
		font-family: 'Product Sans';
		src: url('/fonts/Product-Sans-Regular.ttf') format('truetype');
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
