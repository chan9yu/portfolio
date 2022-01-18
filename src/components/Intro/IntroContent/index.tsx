import React from 'react'

import Logo from 'components/common/Logo'
import IntroInput from './IntroInput'
import IntroSkill from './IntroSkill'
import { IntroContentContainer } from './style'

const IntroContent = () => {
	return (
		<IntroContentContainer>
			<Logo size="title" />
			<IntroInput />
			<IntroSkill />
		</IntroContentContainer>
	)
}

export default IntroContent
