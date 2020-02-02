import React from 'react';
import { DinoImages } from './DinoImages';

export default function Dino(props) {
  let animS = (Math.random() * 6.5) + (props.num % 4) + .6;
  let animMs = Math.random() * 900;
  let tranfX = Math.random() * 300;
  let tranfY = Math.random() * 960;
  let transX = Math.random() * 750;
  let rad = Math.random() * 90;
  // let rot = (Math.random() * 120) * (Math.random() < 0.5 ? -1 : 1)
  
  const dinoSrc = () => {
    const random = Math.floor(Math.random() * 11)
    console.log(DinoImages[0])
    return DinoImages[random]
  }

  return (
    <g
      style={{
        animation: `up ${animS}s ${animMs}ms infinite`,
        // transform: `rotate(${rot}deg)`,
      }}
    >
      <g
        transform={`translate(${tranfX} ${tranfY})`}
        style={{
          transform: `translateX(${transX}px)`,
        }}
      >
        <image href={dinoSrc()}
        />
        
      </g>
    </g>
  )
}