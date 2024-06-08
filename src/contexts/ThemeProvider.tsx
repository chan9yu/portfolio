'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { PropsWithChildren, useMemo } from 'react';

import { darkTheme, lightTheme } from '../styles/theme.css';

export default function ThemeProvider({ children }: PropsWithChildren) {
	const themeValue = useMemo(
		() => ({
			dark: darkTheme,
			light: lightTheme
		}),
		[]
	);

	return (
		<NextThemeProvider attribute="class" defaultTheme="system" value={themeValue}>
			{children}
		</NextThemeProvider>
	);
}
