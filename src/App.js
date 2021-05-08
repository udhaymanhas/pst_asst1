import React, { useState } from 'react';

import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import ContentBody from "./components/contentBody/ContentBody";

import Component1 from "./components/component1/Component1"
import Component2 from "./components/component2/Component2"
import Component3 from "./components/component3/Component3"

function App() {
  let menuItemsList = [
    {
      text: 'Component 1',
      id: 1,
    },
    {
      text: 'Component 2',
      id: 2,
    },
    {
      text: 'Component 3',
      id: 3,
    }
  ]

  const [componentId, setComponentId] = useState(0);
  const [menuItems, updateMenuItems] = useState(menuItemsList);

  const removeMenuItem = (id) => {
    let filteredMenuItems = menuItems.filter(item => item.id !== id);
    updateMenuItems(filteredMenuItems);
  };

  return (
    <div className="app-container">
      <Sidebar 
        menuItems={menuItems} 
        removeMenuItem={removeMenuItem} 
        setComponentId={setComponentId} 
        componentId={componentId}
      />
      <ContentBody>
        {componentId === 0 && <h1>No Component Selected</h1>}
        {componentId === 1 && <Component1/>}
        {componentId === 2 && <Component2/>}
        {componentId === 3 && <Component3/>}
      </ContentBody>
    </div>
  );
}

export default App;
