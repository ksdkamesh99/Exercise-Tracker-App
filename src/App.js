import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";

import ExercisesList from "./components/exerciselist.component";
import EditExercise from "./components/editexercise.component";
import Navbar from "./components/navbar.component";
import DeleteExercise from "./components/deleteexercise.component";
import ViewUsers from "./components/viewusers.component";
import CreateUser from "./components/createuser.component";


function App() {
  return (
    <Router>
    <Navbar />
    <br/>
    <Route path='/' exact component={ExercisesList}></Route>
    <Route path='/exercises/edit/:id' component={EditExercise}></Route>
    <Route path='/exercises/delete/:id' component={DeleteExercise}></Route>
    <Route path='/users/add/' component={CreateUser}></Route>
    <Route path='/users/view' component={ViewUsers}></Route>


    
    </Router>

     );
}

export default App;
