import styled from '@emotion/styled'

import AppLayout from 'components/layout/AppLayout'
import Introduce from 'components/about/Introduce'
import Skills from 'components/about/Skills'
import TimeLine from 'components/about/TimeLine'
import AboutFooter from 'components/about/AboutFooter'

const Container = styled.div`
	padding: 50px 0 150px;
	display: flex;
	flex-direction: column;
	gap: 50px;
`

const Divide = styled.hr`
	width: 100%;
	border: 1px solid var(--hr);
`

const AboutPage = () => {
	return (
		<AppLayout>
			<Container>
				<Introduce />
				<Divide />
				<Skills />
				<Divide />
				<TimeLine />
				<Divide />
				<AboutFooter />
			</Container>
		</AppLayout>
	)
}

export default AboutPage
