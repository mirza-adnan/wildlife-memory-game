import React from 'react';
import styled from 'styled-components';

function Scoreboard({ best, current }) {
	return (
		<ScoreContainer>
			<BestScore>
				Best Score: <span>{best}</span>
			</BestScore>
			<CurrentScore>
				Current Score: <span>{current}</span>
			</CurrentScore>
		</ScoreContainer>
	);
}

const ScoreContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	font-size: clamp(1rem, 2vw, 1.3rem);
	font-family: 'Permanent Marker', sans-serif;
	padding: 1rem;

	@media (max-width: 600px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

const Score = styled.div`
	border: 1px solid rgb(0 0 0 / 15%);
	width: 25%;
	max-width: 230px;
	min-width: 165px;
	padding: 0.5em;
	border-radius: 50px;
	text-align: center;
	box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);
	color: var(--clr-dark);
	background-color: var(--clr-bg);

	& span {
		color: var(--clr-text);
	}
`;
const BestScore = styled(Score)``;
const CurrentScore = styled(Score)``;

export default Scoreboard;
