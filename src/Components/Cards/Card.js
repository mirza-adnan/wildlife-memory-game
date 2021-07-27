import React from 'react';
import styled from 'styled-components';

function Card({ name, image, handleClick, id }) {
    return (
        <CardItem onClick={() => handleClick(id)}>
            <img src={image} alt={name} />
        </CardItem>
    );
}

const CardItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--clr-bg);
    box-shadow: 0 4px 15px 0px rgb(0 0 0 / 20%);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    & img {
        width: 100%;
        max-width: 80px;
    }

    @media (max-width: 470px) {
        padding: 1.5rem;
    }
`;

export default Card;
