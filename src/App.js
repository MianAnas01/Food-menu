import React, { useState } from 'react';
import Menu from './Menu';
import Catagories from './Catagories'
import items from './data';


const allcatagories = ['all' ,...new Set(items.map((item) => item.catagory))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState(allcatagories);

  const filterItems = (catagory) => {
    if (catagory === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.catagory === catagory);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Catagories catagories={catagories} filterItems= {filterItems}
         />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;