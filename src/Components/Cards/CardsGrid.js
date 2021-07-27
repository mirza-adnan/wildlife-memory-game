import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function CardsGrid({ animals, handleClick }) {
	return (
		<CardsContainer>
			{animals.map((animal) => {
				return (
					<Card
						name={animal.name}
						image={animal.image}
						handleClick={handleClick}
						key={animal.id}
						id={animal.id}
					/>
				);
			})}
		</CardsContainer>
	);
}

const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 2rem;
	width: 90%;
	max-width: 800px;
	margin: 2rem auto;
	padding: 2rem;
	border-radius: 10px;
	background-color: var(--clr-grid);
	box-shadow: 0 4px 15px 0px rgb(0 0 0 / 20%);

	@media (max-width: 700px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 1rem;
		padding: 1rem;
	}
`;

export default CardsGrid;
