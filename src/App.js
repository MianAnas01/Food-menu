import React, {useState} from 'react';
import Menu from './Menu';
import Catagories from './Catagories';
import items from './data';


function App() {
const [menuItems, setMenuItems] =useState(items);
const [catagories, setcatagories] =useState([]);

return (
<main>
  <section  className='menu section'>
<div className="title">
  <h2>our menu</h2>
  <div className="underline"></div>
  </div>  


  <Catagories />
<Menu  items={menuItems} />
  </section>
</main>

  

  );
}

export default App;
