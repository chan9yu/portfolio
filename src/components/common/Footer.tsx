import { useMemo } from 'react'
import { RiMailFill, RiPhoneFill } from 'react-icons/ri'
import styled from '@emotion/styled'

import Logo from './Logo'

const Container = styled.footer`
	padding: 15px 0;
	border-top: 2px solid var(--hr);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	.footer__info {
		display: flex;
		gap: 20px;
		.footer__content {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
	.footer__copyright {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: var(--gray);
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 10px 0;
	}
`

const Footer = () => {
	const newYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<Container>
			<Logo size="xl" />
			<div className="footer__info">
				<div className="footer__content">
					<RiPhoneFill />
					010-4185-0768
				</div>
				<div className="footer__content">
					<RiMailFill />
					wry5533@gmail.com
				</div>
			</div>
			<span className="footer__copyright">
				Copyright &copy; {newYear} Changyu All Rights Reserved.
			</span>
		</Container>
	)
}

export default Footer
