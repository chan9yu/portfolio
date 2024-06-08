'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import * as style from './DarkModBtn.css';

export default function Test() {
	const [mounted, setMounted] = useState(false);

	const { resolvedTheme, setTheme } = useTheme();

	const handleToggleTheme = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div />;
	}

	return (
		<div className={style.container}>
			<button aria-label="DarkModeBtn" onClick={handleToggleTheme}>
				{resolvedTheme}
			</button>
			<button aria-label="DarkModeBtn" className={style.button} onClick={handleToggleTheme}>
				{resolvedTheme}
			</button>
		</div>
	);
}
