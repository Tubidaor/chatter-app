import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './Graphs.css'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [{
  "id": "Chumbis",
  "color": "hsl(357, 70%, 50%)",
  "data": [
    {
      "x": 0,
      "y": 0,
    },
    {
      "x": 1,
      "y":100,
    },
    {
      "x": 2,
      "y":300,
    },
    {
      "x": 3,
      "y":1000,
    },
  ],
},
{
  "id": "Standard",
    "color": "hsl(40, 70%, 50%)",
    "data": [
      {
        "x": 0,
        "y":0,
      },
      {
        "x": 1,
        "y":100,
      },
      {
        "x": 2,
        "y":500,
      },
      {
        "x": 3,
        "y":1500,
      },
    ],
},

]

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: 'point' }}
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
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      colors={{ scheme: 'red_yellow_blue' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      enablePointLabel={true}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
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
        {MyResponsiveLine({data})}
      </div>
    )
  }
}