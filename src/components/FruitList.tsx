import React from 'react';
import { Collapse } from 'react-collapse';
import FruitGroup from './FruitGroup';

type Fruit = {
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
  };
};

type FruitListProps = {
  fruits: Fruit[];
  groupBy: 'None' | 'family' | 'order' | 'genus';
  viewType: string;
  addFruitToJar: (fruit: Fruit) => void;
  addGroupToJar: (groupFruits: Fruit[]) => void;
};

const FruitList: React.FC<FruitListProps> = ({ fruits, groupBy, viewType, addFruitToJar, addGroupToJar }) => {
    const groupedFruits = groupBy === 'None' 
      ? { None: fruits } 
      : fruits.reduce((acc: Record<string, Fruit[]>, fruit) => {
          const key = fruit[groupBy]; 
          acc[key] = acc[key] ? [...acc[key], fruit] : [fruit];
          return acc;
        }, {});

        return (
            <div>
              {Object.entries(groupedFruits).map(([groupName, groupFruits]) => (
                <FruitGroup
                  key={groupName}
                  groupName={groupName}
                  fruits={groupFruits}
                  addFruitToJar={addFruitToJar}
                  addGroupToJar={addGroupToJar}
                  viewType={viewType} // Make sure to pass viewType
                />
              ))}
            </div>
          );


};

export default FruitList;
