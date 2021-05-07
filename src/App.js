import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Sidebar from "./components/sidebar/sidebar";
import ContentBody from "./components/contentBody/contentBody";

function App() {

  const [component, setComponent] = useState(0);

  return (
    <div className="app-container">
      <Sidebar setComponent={setComponent}/>
      <ContentBody component={component}/>
    </div>
  );
}

export default App;
