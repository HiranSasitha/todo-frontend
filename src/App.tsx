import React from 'react';
import logo from './logo.svg';
import './App.scss';
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddTodo from './AddTodo';
import UpdateTaskItem from './UpdateTaskItem';
import CompletedTask from './CompletedTask';
import RegisterUser from './auth/RegisterUser';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route index element ={<RegisterUser/>}/>
    <Route path='/home' element ={<Home/>}/>
    <Route path='/add-todo' element ={<AddTodo/>}/>
    <Route path='/update-todo/:id' element ={<UpdateTaskItem/>}/>
    <Route path='/completed-todo' element ={<CompletedTask/>}/>


    </Routes>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
