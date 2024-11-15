import React from 'react';
import {Routes,Route} from 'react-router-dom';
import TrainerList from './trainer_pages/ListTrainer';
import AddTrainer from './trainer_pages/AddTrainer';
import Edittrainer from './trainer_pages/Edittrainer';

import './App.css'

function App() {
  return(
  <div className="container">
    <h1 className='my-4 text-center'>Trainer Management</h1>
    <Routes>
      <Route path="/" element={<TrainerList/>}/>
      <Route path="/add" element={<AddTrainer/>}/>
      <Route path="/edit/:id" element={<Edittrainer/>}/>
    </Routes>
  </div>
  );
}

export default App;
