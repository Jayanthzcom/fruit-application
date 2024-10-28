import React from 'react';

type GroupBySelectorProps = {
  groupBy: 'None' | 'family' | 'order' | 'genus';
  setGroupBy: React.Dispatch<React.SetStateAction<'None' | 'family' | 'order' | 'genus'>>;
};

const GroupBySelector: React.FC<GroupBySelectorProps> = ({ groupBy, setGroupBy }) => {
  return (
    <div className="group-by">
      <label htmlFor="groupBy">Group by: </label>
      <select className='select'
        id="groupBy"
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value as 'None' | 'family' | 'order' | 'genus')}
      >
        <option value="None">None</option>
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>
    </div>
  );
};

export default GroupBySelector;