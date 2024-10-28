import React from 'react';
import PieChart from './PieChart';


type FruitJarProps = {
  jar: Fruit[];
};


type Fruit = {
    name: string;
    family: string;
    order: string;
    genus: string;
    nutritions: {
      calories: number;
    };
  };

  const FruitJar: React.FC<FruitJarProps> = ({ jar }) => {
    // Calculate total calories using the nested structure
    const totalCalories = jar.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0);
  
    return (
      <div className="fruit-jar">
        <h2>Fruit Jar</h2>
        <ul>
          {jar.map((fruit, index) => (
            <li key={index} className="fruit-item">
              {fruit.name} - {fruit.nutritions.calories} calories
            </li>
          ))}
        </ul>
        <div>
          <strong>Total Calories: {totalCalories}</strong>
        </div>
        <div className="pie-chart">
          {jar.length > 0 ? <PieChart jar={jar} /> : <p>No fruits added to the jar.</p>}
        </div>
      </div>
    );
  };
  
  export default FruitJar;
