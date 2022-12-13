import React from 'react';

import './index.css';

const Sidebar = ({ categories, getImagesByCategory }) => {
  return (
    <div className="sidebar_wrapper">
      <h1>Categories</h1>
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="sidebar_item"
            onClick={() => getImagesByCategory(category.id, category.name)}
          >
            <span>{category.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
