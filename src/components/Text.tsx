import React, { FC } from 'react'
import styled from '@emotion/styled'

const TextContainer = styled.div`
	background-color: #333;
	color: #eee;
`

interface Props {
	text: string
}

const Text: FC<Props> = ({ text }) => {
	return <TextContainer>{text}</TextContainer>
}

export default Text
