import React from 'react'

import { ProfileCardWrapper } from './style'

const PROFILE_IMG =
	'https://avatars.githubusercontent.com/u/80776262?v=4' as const

const ProfileCard = () => {
	return (
		<ProfileCardWrapper>
			<div className="card__header">
				<div className="card__header_info">
					<h2>여찬규</h2>
					<span>Mail: wry5533@gmail.com</span>
					<span>Kakaotalk: wry5533</span>
					<span>GitHub: github.com/changyuyeo</span>
				</div>
				<img src={PROFILE_IMG} alt="profile_img" />
			</div>
			<div className="card__description">
				<h3>📌 TMI(Too Much Information)</h3>
				<span>
					저의 취미 중 하나는 웹디자인에 대한 영상을 보며 <br />
					따라만들고 직접 디자인하는 것이었습니다. <br />
					시간이 지나 직접 만든 디자인을 퍼블리싱을 하면서 흥미와 재미를 <br />
					느끼게 되었고 자연스럽게 프런트엔드에 입문하게 되어 지금까지 <br />
					공부를 하면서 프런트엔드 개발자가 되기 위해 노력하고 있습니다.
				</span>
			</div>
		</ProfileCardWrapper>
	)
}

export default ProfileCard
