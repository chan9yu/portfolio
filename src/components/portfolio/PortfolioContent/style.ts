import styled from '@emotion/styled'

export const Container = styled.div`
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
		background-color: transparent;
		.language-text {
			background-color: var(--gray);
			color: var(--text);
		}
		img {
			background-color: transparent;
		}
		h1,
		h2 {
			border-bottom: 1px solid var(--hr);
		}
		a {
			color: var(--primary);
		}
		th,
		td {
			border: 1px solid var(--hr);
			background-color: var(--bg_color_page1);
			vertical-align: middle;
		}
		hr {
			background-color: var(--hr);
		}
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
`
