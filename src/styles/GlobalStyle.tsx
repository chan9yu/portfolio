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
		--bg_color_page2: #eee;
		--logo_color_1: #4285f4;
		--logo_color_2: #ea4335;
		--logo_color_3: #fbbc05;
		--logo_color_4: #4285f4;
		--logo_color_5: #34a853;
		--logo_color_6: #ea4335;
		--logo_color_7: #fbbc05;
		--text: #333;
		--gray: #a0a0a0;
		--hr: #e3e4e8;
		--primary: #d35400;
	}

	body.dark {
		-webkit-font-smoothing: antialiased;
		--bg_color_page1: #35363a;
		--bg_color_page2: #202124;
		--logo_color_1: #d35400;
		--logo_color_2: #da552f;
		--logo_color_3: #ff6600;
		--logo_color_4: #d35400;
		--logo_color_5: #fff;
		--logo_color_6: #fff;
		--logo_color_7: #fff;
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
