import React from 'react';
import './Dinos.css'

export default function DinoContainer(props) {
  return (
    <div className='bubbles-container'>
   <svg
        className='bubbles'
        viewBox='0 0 700 1024'
        style={{ 'overflow': 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className='bubbles-small' strokeWidth='7' width="100%">
          {props.children}
        </g>
      </svg>
    </div>
  )
}
