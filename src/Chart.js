import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from './Title';

const data = [
  {
    name: '5. Oktober', Einsteigerkurs: 4000, Fortgeschritten: 2400, amt: 2400,
  },
  {
    name: '6. Oktober', Einsteigerkurs: 3000, Fortgeschritten: 1398, amt: 2210,
  },
  {
    name: '7. Oktober', Einsteigerkurs: 2000, Fortgeschritten: 9800, amt: 2290,
  },
  {
    name: '8. Oktober', Einsteigerkurs: 2780, Fortgeschritten: 3908, amt: 2000,
  },
  {
    name: '9. Oktober', Einsteigerkurs: 1890, Fortgeschritten: 4800, amt: 2181,
  },
  {
    name: '10. Oktober', Einsteigerkurs: 2390, Fortgeschritten: 3800, amt: 2500,
  },
  {
    name: '11. Oktober', Einsteigerkurs: 3490, Fortgeschritten: 4300, amt: 2100,
  },
];
export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Lernerfolg</Title>
      <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Fortgeschritten" fill="#8884d8" />
        <Bar dataKey="Einsteigerkurs" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}