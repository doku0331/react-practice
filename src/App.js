
import React, { useState } from 'react';
import './App.css';
import UnitControll from './components/UnitControl';
import CardFooter from './components/CardFooter';
import UnitConverter from './components/UnitConverter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

function App() {  
  const [Input, setInput] = useState(0);
  const handleInputChange = (e)=>{
    //從e的target取出value的屬性
    const {value}= e.target;
    setInput(value);
  }
  return (
    <div className="container">
      <div className="card-header">網路速度轉換器</div>
      <div className="card-body">
        <UnitControll />
        <UnitConverter Input = {Input} handleInputChange= {handleInputChange} />
      </div>
      <CardFooter inputValue={Input} />
    </div>
  );
}



export default App;
