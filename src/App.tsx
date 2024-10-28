import React, { useEffect, useState } from 'react';
import { fetchFruits } from './services/api';
import FruitList from './components/FruitList';
import FruitJar from './components/FruitJar';
import GroupSelect from './components/GroupSelect';
import ViewToggle from './components/ViewToggle';

import './App.css';

const App: React.FC = () => {

  type Fruit = {
    name: string;
    family: string;
    order: string;
    genus: string;
    nutritions: {
      calories: number;
    };
  };

  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [jar, setJar] = useState<Fruit[]>([]);
  const [groupBy, setGroupBy] = useState<'None' | 'family' | 'order' | 'genus'>('None');
  const [viewType, setViewType] = useState<string>('List');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const data = await fetchFruits();
        setFruits(data);
      } catch (err) {
        setError('Failed to load fruits.');
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  }, []);


  const addFruitToJar = (fruit: Fruit) => {
    setJar(prevJar => [...prevJar, fruit]);
  };

  // Function to add all fruits from a group to the jar
  const addGroupToJar = (groupFruits: Fruit[]) => {
    setJar(prevJar => [...prevJar, ...groupFruits]);
  };

  return (
    <div className="App">
      <h1>Fruit App</h1>
      <GroupSelect groupBy={groupBy} setGroupBy={setGroupBy} />
      <ViewToggle viewType={viewType} setViewType={setViewType} />
      
      <div className="main-content">
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
          <>
           <div className="left-section">
           <FruitList
              fruits={fruits}
              groupBy={groupBy}
              viewType={viewType}
              addFruitToJar={addFruitToJar}
              addGroupToJar={addGroupToJar}
            />
           </div>
           
           <div className="right-section">
          <FruitJar jar={jar} />
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
