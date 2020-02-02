import React from 'react';
import { DinoImages } from './DinoImages';

export default function Dino(props) {
  let animS = (Math.random() * (30.5 - 20) + 20) + (props.num % 4) + .6;
  let animMs = Math.random() * (12000 - 6000) + 6000;
  let tranfX = Math.random() * 300;
  let tranfY = Math.random() * 960;
  let transX = Math.random() * 750;
  
  
  const dinoSrc = () => {
    const random = Math.floor(Math.random() * 11)
    return DinoImages[random]
  }

  return (
    <g
      style={{
        animation: `up ${animS}s ${animMs}ms infinite`,
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