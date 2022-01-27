import styled from '@emotion/styled'

export const IntroContentContainer = styled.div`
	width: 35%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	padding-bottom: 100px;
	@media ${({ theme }) => theme.device.NoteBook} {
		width: 50%;
	}
	@media ${({ theme }) => theme.device.tabletL} {
		width: 60%;
		gap: 40px;
		padding-bottom: 50px;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 70%;
		gap: 30px;
		padding-bottom: 0;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 90%;
	}
`
