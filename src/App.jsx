import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Images from './components/Images/Images';

import useApp from './useApp';

import './App.css';

function App() {
  const { categories, images, getImagesByCategory, showMore } = useApp();

  return (
    <div className="App">
      <Sidebar
        categories={categories}
        getImagesByCategory={getImagesByCategory}
      />
      <div className="right-side">
        <Images images={images} />

        {!!images.length && (
          <button className="show-more-btn" onClick={(e) => showMore(e)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
