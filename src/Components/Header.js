import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<h1>
				Wildlife Memory Game <i className='fas fa-paw'></i>
			</h1>
			<p>Think Twice Before You Click Twice</p>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	font-size: clamp(0.9rem, 2.3vw, 1.3rem);
	font-family: 'Permanent Marker', sans-serif;
	color: var(--clr-text);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.3em 0;
`;

export default Header;
