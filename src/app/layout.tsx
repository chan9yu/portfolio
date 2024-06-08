import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';

import ThemeProvider from '../contexts/ThemeProvider';

const pretendard = localFont({
	src: '../assets/fonts/PretendardVariable.woff2',
	display: 'swap',
	weight: '45 920',
	variable: '--font-pretendard'
});

export const metadata: Metadata = {
	title: 'chan9yu portfolio',
	description: '📄 A modern, static portfolio website built with Next.js to showcase projects and skills.'
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" className={`${pretendard.variable}`} suppressHydrationWarning>
			<body className={pretendard.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
