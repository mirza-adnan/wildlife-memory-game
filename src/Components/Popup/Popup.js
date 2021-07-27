import React from 'react';
import styled from 'styled-components';

function Popup({ reset, won }) {
    const msg = won
        ? 'Well Done Sherlock'
        : 'These Animals Have Better Memory Than You';
    const btnMsg = won ? 'Play Again' : 'Retry';
    return (
        <PopupContainer>
            <PopupContent>
                <p>{msg}</p>
                <Button onClick={reset}>{btnMsg}</Button>
            </PopupContent>
        </PopupContainer>
    );
}

const PopupContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--clr-text);
    font-size: clamp(1.5rem, 4vw, 2rem);
`;

const PopupContent = styled.div`
    width: 90%;
    max-width: 700px;
    height: 50%;
    max-height: 400px;
    background-color: var(--clr-bg);
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 500px) {
        padding: 1rem;
    }
`;

const Button = styled.button`
    border: none;
    outline: none;
    padding: 0.7rem 2.5rem;
    border-radius: 50px;
    background-color: var(--clr-bg);
    color: var(--clr-text);
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: 0 4px 15px 5px rgb(0 0 0 / 20%);
    cursor: pointer;
    border: 1px solid var(--clr-text);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--clr-text);
        color: var(--clr-bg);
    }

    &:active {
        transform: scale(0.8);
    }
`;

export default Popup;
