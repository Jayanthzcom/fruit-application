import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);



type Fruit = {
    name: string;
    family: string;
    order: string;
    genus: string;
    nutritions: {
      calories: number;
    };
  };

type PieChartProps = {
  jar: Fruit[];
};

const PieChart: React.FC<PieChartProps> = ({ jar }) => {
  const data = {
    labels: jar.map(fruit => fruit.name),
    datasets: [
      {
        label: 'Calories',
        data: jar.map(fruit => fruit.nutritions.calories), // Access calories from the nested structure
        backgroundColor: jar.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`),
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
