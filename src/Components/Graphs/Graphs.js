import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './Graphs.css'


const MyResponsiveLine = ( data /* see data tab */ ) => (
  
  <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: 'linear',}}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Years',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Known Words',
          legendOffset: -45,
          legendPosition: 'middle'
      }}
      colors={{ scheme: 'set1' }}
      pointSize={5}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      enablePointLabel={false}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'top-left',
              direction: 'row',
              justify: false,
              translateX: -50,
              translateY: -40,
              itemsSpacing: 4,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 1,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(200, 200, 200, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
)

export default class Graphs extends Component {
  
  render() {
    return (
      <div className="GraphDiv">
        {MyResponsiveLine(this.props.data)}
      </div>
    )
  }
}