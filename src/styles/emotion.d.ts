import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		fontSizes: {
			small: string
			base: string
			lg: string
			xl: string
			xxl: string
			xxxl: string
			big: string
			subTitleSize: string
			titleSize: string
			bigTitleSize: string
		}
		deviceSizes: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
		colors: {
			bgColor: string
			introBgColor: string
			btnColor: string
			btnBorderColor: string
			fontColor: string
			primary: string
			gray: string
		}
		device: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
	}
}
