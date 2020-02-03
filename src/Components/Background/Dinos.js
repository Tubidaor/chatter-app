import React from 'react';
import './Dinos.css';
import Dino from './Dino';
import DinoContainer from './DinoContainer';

export default function Bubbles(props) {
  const makeNullsArray = len =>
  new Array(len).fill(null, 0, len);

  const array = makeNullsArray(props.numberOfBubbles);

  const dinos = array.map((_, i) => 
    <Dino key={i} num={i} />
  )

  return (
    <DinoContainer>
      {dinos}
    </DinoContainer>
  )
}
