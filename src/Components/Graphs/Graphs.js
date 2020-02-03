import React, { Component } from 'react';
import {
  Chart, 
  // Bars,
  // Cloud,
  // Labels,
  Lines,
  // Pies,
  // RadialLines,
  // Ticks,
  // Title,
  // Layers,
  // Animate,
  // Transform,
  // Handlers,
  // helpers,
  // DropShadow,
  // Gradient,
  Dots,
} from 'rumble-charts';
import './Graphs.css';


export default class Graphs extends Component {
  render() {
    return (
      <div>
        <Chart 
          width={600}
          height={250}
          series={this.props.series}
          minY={0}
          maxY={this.props.maxY}
          className='MainChart'>
            {/* <Bars 
              innerPadding={5} 
              groupPadding={10}
            /> */}
            <Lines asAreas={false} interpolation='monotone' colors={['red','blue','yellow']}/>
            <Dots />
          </Chart>
      </div>
    )
  }
}