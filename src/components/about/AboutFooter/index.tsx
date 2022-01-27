import React from 'react'
import { AboutFooterContainer } from './style'

const AboutFooter = () => {
	return (
		<AboutFooterContainer>
			<div className="footer__header">
				<h2>Footer</h2>
				<hr />
			</div>
			<span className="footer__text">
				개인적으로는 포트폴리오는 프론트엔드 예비 개발자로써 웹으로 무조건
				만들어야겠다고 계속 생각을 했습니다. <br />
				막상 디자인부터 여럿 시도와 오랫동안 고민하게 되었는데요..
				<br />
				때마침 이번 기회에 클론 코딩을 해보고 싶었던 구글을 오마주 해서 해보면
				어떨까..?
				<br />
				라는 아이디어가 떠오르기 시작하였고, 지금의 웹 포트폴리오가
				만들어졌습니다.
			</span>
			<span className="footer__text">
				원래는 <span className="primary">Next.js</span>로 개발을 시작하려
				했으나,
				<br />
				이번 포트폴리오 웹 프로젝트를 진행하면서
				<span className="primary">Gatsby</span>라는 프레임워크를 알게 되었고,
				<br />
				<span className="primary">SSG, JAM Stack</span> 등 새로운 지식을
				접하면서 포트폴리오를 만들기 위해
				<br />
				공부를 하며 바로 웹에 적용을 하면서 만들어 갔습니다.
				<br />
				덕분에 <span className="primary">Gatsby</span> 을 왜 쓰는지 알게 되었고{' '}
				<span className="primary">JAM Stack</span>에 장점을 직접 느낄 수 있었던
				좋은 경험을 했습니다.
			</span>
		</AboutFooterContainer>
	)
}

export default AboutFooter
