import { AboutFooterContainer } from './style'

const AboutFooter = () => {
	return (
		<AboutFooterContainer>
			<div className="footer__header">
				<h2>Footer</h2>
				<hr />
			</div>
			<span className="footer__text">
				개인적으로 포트폴리오는 프론트엔드 개발자로써 무조건 직접 만들어야겠다고
				생각했습니다. <br />
				하지만 막상 제작을 시작하자 디자인부터 여럿 시도와 오랫동안 고민하게
				되었는데요..
				<br />
				이번 기회에 예전부터 클론 코딩을 해보고 싶었던 구글 오마주 해서
				만들어보자는 생각이 들었습니다.
				<br />
				방향을 정하니 아이디어가 떠오르기 시작하였고, 지금의 웹 포트폴리오가
				만들어졌습니다.
			</span>
			<span className="footer__text">
				원래는 <span className="primary">Next.js</span>로 개발을 시작하려
				했으나,
				<br />
				이번 포트폴리오 웹 프로젝트를 진행하면서
				<span className="primary">Gatsby</span>라는 프레임워크를 알게
				되었습니다.
				<br />그 외로 <span className="primary">SSG, JAM Stack 등</span> 새로운
				지식을 포트폴리오 제작을 위해 접하면서
				<br />
				공부를 하며, 또 바로 웹에 적용하고 만들게 되었습니다.
				<br />
				포트폴리오를 제작하며 <span className="primary">Gatsby</span> 왜
				사용하는지 알게 되었고 <span className="primary">JAM Stack</span>에
				장점을 직접 느낄 수 있었던 좋은 경험을 했습니다.
			</span>
		</AboutFooterContainer>
	)
}

export default AboutFooter
