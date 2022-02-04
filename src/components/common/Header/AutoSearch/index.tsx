import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiSearch, FiMic, FiX } from 'react-icons/fi'

import { SearchWrapper } from './style'

const AutoSearch = () => {
	const txt = '안녕하세요 성장하는 FE개발자 여찬규 입니다!'
	const [text, setText] = useState('')
	const [count, setCount] = useState(0)

	const interval = useRef<NodeJS.Timer | null>(null)

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
			clearInterval(interval.current)
			clearText()
		}
		return () => clearInterval(interval.current as NodeJS.Timeout)
	}, [count])

	return (
		<SearchWrapper>
			<span>{text}</span>
			<div className="search__icons">
				<FiX size={20} color="#777" />
				<div className="search__vertical_line" />
				<FiSearch size={20} color="#fff" />
				<FiMic size={20} color="#fff" />
			</div>
		</SearchWrapper>
	)
}

export default AutoSearch
