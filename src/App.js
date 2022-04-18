import React from 'react';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import Input from './components/Input';
import Slider from './components/Slider';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <div className='App'>
      1. Toggle
      <Toggle />
      2. Tab
      <Tab />
      3. Slider
      <Slider />
      4. Input
      <Input />
      5. Dropdown
      <Dropdown />
    </div>
  );
};

export default App;
