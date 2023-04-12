import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip} from 'recharts';

const data = [
  { name: 'Assignment 1', value: 60 },
  { name: 'Assignment 2', value: 60 },
  { name: 'Assignment 3', value: 60 },
  { name: 'Assignment 4', value: 60 },
  { name: 'Assignment 5', value: 60 },
  { name: 'Assignment 6', value: 60 },
  { name: 'Assignment 7', value: 60 },
  { name: 'Assignment 8', value: 60 }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-straight-angle-oz0th';

  render() {
    return (
      <div className='bg-gray-100 container mx-auto text-center pt-10 font-bold'>
        <h1>This is a Pie chart of 8 Assignment marks</h1>
        <PieChart width={1500} height={600}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}
