import React, { useMemo } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
	width: 79.1%;
	margin: 0 auto;
	display: flex;
	gap: 20px;
	.header__menu_item {
		color: var(--gray);
		font-size: ${({ theme }) => theme.fontSizes.base};
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			filter: brightness(70%);
		}
		&:first-of-type {
			color: var(--primary);
		}
	}
`

const HeaderMenu = () => {
	const menus = useMemo(
		() => [
			{ id: 1, name: 'INTRODUCE' },
			{ id: 2, name: 'SKILLS' },
			{ id: 3, name: 'TIMELINE' },
			{ id: 4, name: 'FOOTER' }
		],
		[]
	)

	return (
		<Container>
			{menus.map(menu => (
				<div key={menu.id} className="header__menu_item">
					{menu.name}
				</div>
			))}
		</Container>
	)
}

export default HeaderMenu
