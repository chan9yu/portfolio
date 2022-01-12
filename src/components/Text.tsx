import React, { FC } from 'react'

interface Props {
	text: string
}

const Text: FC<Props> = ({ text }) => {
	return <div>{text}</div>
}

export default Text
