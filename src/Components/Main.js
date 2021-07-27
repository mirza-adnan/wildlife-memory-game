import React, { useState, useEffect } from 'react';
import Scoreboard from './Score/Scoreboard';
import CardsGrid from './Cards/CardsGrid';
import animalsArray from '../Utility/animals';
import uniqid from 'uniqid';

function Main() {
	// mapping over the animals array and returning the object with a unique id and clicked property of false
	const initialArray = animalsArray.map((animal) => {
		return { ...animal, id: uniqid(), clicked: false };
	});

	const [animals, setAnimals] = useState([]);
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);

	const randomizeArray = (arr) => {
		const inputArray = [...arr];
		const randArray = [];
		const initialLength = inputArray.length;
		for (let i = 0; i < initialLength; i++) {
			const randIndex = Math.floor(Math.random() * inputArray.length);
			randArray.push(inputArray[randIndex]);
			inputArray.splice(randIndex, 1);
		}
		return randArray;
	};

	const resetGame = () => {
		setCurrentScore(0);
		setAnimals(randomizeArray(initialArray));
	};

	const playRound = () => {
		setAnimals(randomizeArray(animals));
		setCurrentScore(currentScore + 1);
	};

	const handleCardClick = (id) => {
		const animal = animals.find((obj) => {
			return obj.id === id;
		});

		if (animal.clicked) {
			resetGame();
		} else {
			playRound();
			animal.clicked = true;
		}
	};

	useEffect(() => {
		setAnimals(randomizeArray(initialArray));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (currentScore > bestScore) {
			setBestScore(currentScore);
		}
	}, [currentScore]);

	return (
		<main>
			<Scoreboard best={bestScore} current={currentScore} />
			<CardsGrid animals={animals} handleClick={handleCardClick} />
		</main>
	);
}

export default Main;
