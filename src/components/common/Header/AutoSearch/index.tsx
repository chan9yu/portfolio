import { useCallback, useEffect, useRef, useState } from 'react'

import {
	FiXIcon,
	MicIcon,
	MobileSearchIcon,
	SearchIcon,
	SearchWrapper
} from './style'

const AutoSearch = () => {
	const txt = '안녕하세요 성장하는 FE개발자 여찬규 입니다!'
	const [text, setText] = useState('')
	const [count, setCount] = useState(0)

	const interval = useRef<NodeJS.Timer>()

	const clearText = useCallback(() => {
		setTimeout(() => {
			setText('')
			setCount(0)
		}, 1500)
	}, [])

	useEffect(() => {
		interval.current = setInterval(() => {
			setText(prev => prev.concat(txt[count]))
			setCount(count + 1)
		}, 100)
		if (count === txt.length) {
			clearInterval(interval.current as NodeJS.Timeout)
			clearText()
		}
		return () => clearInterval(interval.current as NodeJS.Timeout)
	}, [count])

	return (
		<SearchWrapper>
			<MobileSearchIcon />
			<span>{text}</span>
			<div className="search__icons">
				<FiXIcon color="#777" />
				<div className="search__vertical_line" />
				<SearchIcon color="#fff" />
				<MicIcon color="#fff" />
			</div>
		</SearchWrapper>
	)
}

export default AutoSearch
