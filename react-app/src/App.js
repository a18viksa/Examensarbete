import React, { Component } from 'react';
import { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Template from './views/Template';

const App = () => {

    return (
      <div className="container">
        <Template/>
        <Sidebar/>
      </div>
    );
}

export default App;
