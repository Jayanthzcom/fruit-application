import React, { useState } from 'react';


type Fruit = {
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
  };
};

type FruitGroupProps = {
  groupName: string;
  fruits: Fruit[];
  addFruitToJar: (fruit: Fruit) => void;
  addGroupToJar: (groupFruits: Fruit[]) => void;
  viewType: string;
};

const FruitGroup: React.FC<FruitGroupProps> = ({ groupName, fruits, addFruitToJar, addGroupToJar, viewType }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
      setIsCollapsed(prev => !prev);
    };

  return (
    <div className="fruit-group">
      <div className="group-header">
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
        <h3>{groupName}</h3>
        <button onClick={() => addGroupToJar(fruits)}>Add All</button>
      </div>

      {!isCollapsed && (
        <>
          {viewType === 'List' ? (
            <ul>
              {fruits.map((fruit) => (
                <li key={fruit.name}>
                  {fruit.name} ({fruit.nutritions.calories} cal)
                  <button onClick={() => addFruitToJar(fruit)}>Add</button>
                </li>
              ))}
            </ul>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Family</th>
                  <th>Order</th>
                  <th>Genus</th>
                  <th>Calories</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {fruits.map((fruit) => (
                  <tr key={fruit.name}>
                    <td>{fruit.name}</td>
                    <td>{fruit.family}</td>
                    <td>{fruit.order}</td>
                    <td>{fruit.genus}</td>
                    <td>{fruit.nutritions.calories}</td>
                    <td>
                      <button onClick={() => addFruitToJar(fruit)}>Add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

  /* return (
    <div className="fruit-group">
      <div className="group-header">
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
        <h3>{groupName}</h3>
        <button onClick={() => addGroupToJar(fruits)}>Add All</button>
      </div>

      <Collapse isOpened={!isCollapsed}>
        {viewType === 'List' ? (
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit.name}>
                {fruit.name} ({fruit.nutritions.calories} cal)
                <button onClick={() => addFruitToJar(fruit)}>Add</button>
              </li>
            ))}
          </ul>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Order</th>
                <th>Genus</th>
                <th>Calories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fruits.map((fruit) => (
                <tr key={fruit.name}>
                  <td>{fruit.name}</td>
                  <td>{fruit.family}</td>
                  <td>{fruit.order}</td>
                  <td>{fruit.genus}</td>
                  <td>{fruit.nutritions.calories}</td>
                  <td>
                    <button onClick={() => addFruitToJar(fruit)}>Add</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Collapse>
    </div>
  ); 
};*/

export default FruitGroup;
