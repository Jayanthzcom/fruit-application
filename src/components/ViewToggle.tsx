import React from 'react';

type ViewToggleProps = {
  viewType: string;
  setViewType: React.Dispatch<React.SetStateAction<string>>;
};

const ViewToggle: React.FC<ViewToggleProps> = ({ viewType, setViewType }) => (
    <div className="view-toggle">
      <button className="toggle-button"
        onClick={() => setViewType('List')} 
        disabled={viewType === 'List'}
        style={{ fontWeight: viewType === 'List' ? 'bold' : 'normal' }}
      >
        List View
      </button>
      <button className="toggle-button"
        onClick={() => setViewType('Table')} 
        disabled={viewType === 'Table'}
        style={{ fontWeight: viewType === 'Table' ? 'bold' : 'normal' }}
      >
        Table View
      </button>
    </div>
  );
  
  export default ViewToggle;