import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const container = style({
	width: '120px',
	padding: '12px',
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

export const button = style({
	fontFamily: vars.fontFamily.pretendard
});
