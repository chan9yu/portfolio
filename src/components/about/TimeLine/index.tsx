import { useMemo } from 'react'
import { TimeLineContainer, TimeLineWrapper } from './style'

const TimeLine = () => {
	const timelineContent = useMemo(
		() => [
			{
				id: 1,
				title: '학력',
				date: '2017-03 ~ 2022-02',
				content: '신구대학교 / 소프트웨어 전공',
				description: [
					'- 웹 디자인 동아리 데시나 부회장 활동',
					'- 졸업 프로젝트 Vue.js 기반 SNS 서비스 개발 및 배포',
					'- 신구대 대상 차세대 스마트 엔지니어 과정 수료'
				]
			},
			{
				id: 2,
				title: '스터디',
				date: '2021-08 ~ 2021-09',
				content: '열정 열정 vue 스터디',
				description: [
					'- vue.js 역량 강화를 위한 vue 스터디 진행 ',
					'- 매주 목표를 정하고 개인 vue.js 책이나 인프런 강의로 공부 후 notion에 코드 및 내용 정리하여 발표',
					'- 간단한 웹 페이지를 vue를 이용해 제작이 최종 목표 vuex와 tyepscript 이용한 도서 검색 웹앱 개발 및 배포'
				]
			},
			{
				id: 3,
				title: '자격증',
				date: '2021-06',
				content: '정보처리산업기사',
				description: []
			}
		],
		[]
	)

	return (
		<TimeLineContainer>
			<div className="timeline__header">
				<div className="timeline__header_title">
					<h2>TIMELINE</h2>
					<span>학력 / 스터디 / 자격증</span>
				</div>
				<hr />
			</div>
			<TimeLineWrapper>
				{timelineContent.map(v => (
					<div className="timeline__item_box" key={v.id}>
						<span className="timeline__item_title">{v.title}</span>
						<div className="timeline__item_content">
							<span className="timeline__item_date">{v.date}</span>
							<div className="timeline__item_sub_title">
								<span>{v.content}</span>
								{v.description.map(v => (
									<span key={v} className="timeline__item_description">
										{v}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</TimeLineWrapper>
		</TimeLineContainer>
	)
}

export default TimeLine
