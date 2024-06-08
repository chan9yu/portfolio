// styles/globals.css.ts
import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
	boxSizing: 'border-box'
});

globalStyle('body', {
	fontSize: vars.fontSize.md,
	backgroundColor: vars.color.background,
	userSelect: 'none',
	transition: 'all 0.25s linear'
});
