import React from 'react'
import { IntroduceContainer } from './style'

const Introduce = () => {
	return (
		<IntroduceContainer>
			<div className="introducen__header">
				<h2>INTRODUCE</h2>
				<hr />
			</div>
			<h1 className="introducen__title">
				안녕하세요! <br /> <span>프론트엔드</span> 개발자 <br /> 여찬규 입니다.
			</h1>
			<div className="introducen__content">
				<span>
					저는 프론트엔드 개발에 대해 재미를 느끼며 개발하는 것을 좋아합니다.
					<br />
					평소에 무슨 취미가 있냐고 물어보면
					<span className="color_primary">웹 디자인</span>과
					<span className="color_primary">개발</span>이라고 말하고 싶습니다.
				</span>
				<span>
					처음 개발을 시작할 때도 그렇고 지금까지 공부하면서 재미가 있었고
					좋았기 때문에 <br /> 도중에 포기하거나 그만두지 않고 꾸준하게
					해왔습니다.
				</span>
				<span>
					앞으로도 프론트엔드 개발자로써 성장하기 위해 계속 공부를 하며 <br />
					새로운 기술에 적응하며 여러 문제를 해결할 수 있는 개발자가 되겠습니다!
				</span>
			</div>
		</IntroduceContainer>
	)
}

export default Introduce
