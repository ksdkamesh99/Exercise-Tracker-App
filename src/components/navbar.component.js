import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(

<nav className="navbar navbar-dark bg-dark">
  <div className=" navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/users/'>Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/users/add'>Create User</Link>
      </li>
      
    </ul>
     </div>

</nav>
        );
    }
}