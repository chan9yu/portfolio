import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Logo from './Logo'

const Container = styled.footer`
	padding: 15px 0;
	border-top: 1px solid var(--gray);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
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
			<span className="footer__copyright">
				Copyright &copy; {newYear} Changyu All Rights Reserved.
			</span>
		</Container>
	)
}

export default Footer
