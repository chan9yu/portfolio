// styles/theme.css.ts
import { createGlobalTheme, createThemeContract, createTheme } from '@vanilla-extract/css';

const global = createGlobalTheme(':root', {
	fontFamily: {
		pretendard: `var(--font-pretendard)`
	},
	fontSize: {
		xs: '0.75rem', // 12px
		sm: '0.875rem', // 14px
		md: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		xxl: '1.5rem' // 24px
	},
	fontWeight: {
		thin: '100',
		extraLight: '200',
		light: '300',
		regular: '400',
		medium: '500',
		semiBold: '600',
		bold: '700',
		extraBold: '800',
		black: '900'
	}
});

export const color = createThemeContract({
	background: null,
	text: null
});

export const lightTheme = createTheme(color, {
	background: '#ffffff',
	text: '#000000'
});

export const darkTheme = createTheme(color, {
	background: '#000000',
	text: '#ffffff'
});

export const vars = {
	...global,
	color
};
