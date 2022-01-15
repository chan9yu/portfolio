import React, { FC } from 'react'
import reset from 'styled-reset'
import { Global, css } from '@emotion/react'

const DefaultStyle = css`
	${reset}
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
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 900;
		src: url('/fonts/NotoSansKR-Black.otf') format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 700;
		src: url('/fonts/NotoSansKR-Bold.otf') format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 500;
		src: url('/fonts/NotoSansKR-Medium.otf') format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 400;
		src: url('/fonts/NotoSansKR-Regular.otf') format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 300;
		src: url('/fonts/NotoSansKR-Light.otf') format('truetype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-weight: 100;
		src: url('/fonts/NotoSansKR-Thin.otf') format('truetype');
	}
	@font-face {
		font-family: 'JuliusSansOne';
		src: url('/fonts/JuliusSansOne-Regular.ttf') format('truetype');
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
