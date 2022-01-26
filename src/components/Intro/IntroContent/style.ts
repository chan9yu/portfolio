import styled from '@emotion/styled'

export const IntroContentContainer = styled.div`
	width: 40%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	padding-bottom: 100px;
	@media ${({ theme }) => theme.device.tabletL} {
		width: 80%;
		gap: 40px;
		padding-bottom: 0;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		gap: 30px;
	}
`
