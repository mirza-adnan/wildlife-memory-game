/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Scoreboard from './Score/Scoreboard';
import CardsGrid from './Cards/CardsGrid';
import Popup from './Popup/Popup';
import animalsArray from '../Utility/animals';
import uniqid from 'uniqid';

function Main() {
	// initialArray contains the animal objects with all the default values and serves to reset the game
	// mapping over the animals array and returning the object with a unique id and clicked property of false
	const initialArray = animalsArray.map((animal) => {
		return { ...animal, id: uniqid(), clicked: false };
	});

	const [animals, setAnimals] = useState([]);
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [lost, setLost] = useState(false);
	const [won, setWon] = useState(false);

	// this function returns a randomized version of the array that was passed to it
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

	const playRound = () => {
		setAnimals(randomizeArray(animals));
		setCurrentScore(currentScore + 1);
	};

	const handleCardClick = (id) => {
		const animal = animals.find((obj) => {
			return obj.id === id;
		});

		if (animal.clicked) {
			setLost(true);
		} else {
			playRound();
			animal.clicked = true;
		}
	};

	const resetGame = () => {
		setCurrentScore(0);
		setWon(false);
		setLost(false);
		setAnimals(randomizeArray(initialArray));
	};

	// setting the animals array to a randomized array containing the default animal objects when the component mounts
	useEffect(() => {
		setAnimals(randomizeArray(initialArray));
	}, []);

	//
	useEffect(() => {
		if (currentScore > bestScore) {
			setBestScore(currentScore);
		}
		if (currentScore === 12) {
			setWon(true);
		}
	}, [currentScore]);

	return (
		<main>
			<Scoreboard best={bestScore} current={currentScore} />
			<CardsGrid animals={animals} handleClick={handleCardClick} />
			{lost || won ? <Popup reset={resetGame} won={won} /> : null}
		</main>
	);
}

export default Main;
