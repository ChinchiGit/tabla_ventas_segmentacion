import React from 'react';
import HorizontalBar from './HorizontalBar';

const App = () => {
  // Datos de ejemplo para mostrar en el gráfico
  const data = [
    {
      name: 'De 9:00 a 12:00',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [5, 3, 8, 4]
    },
    {
      name: 'De 12:00 a 15:00',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [8, 3, 6, 2]
    },
    {
      name: 'De 15:00 a 18:00',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [4, 6, 9, 7]
    },
    {
      name: 'De 18:00 a 21:00',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [6, 8, 3, 5]
    }
  ];

  return (
    <div>
      <h1>Gráfico de Barras Horizontales Apiladas</h1>
      <HorizontalBar data={data} />
    </div>
  );
};

export default App;

