import React,{Component} from 'react';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class Home extends Component{
    
    render(){
        
        return(
        
            
            <div className="container-fluid">
    <div>        
    <h1 className=" head text-info"><strong>The Project Details</strong></h1>
    <ul className="nav nav-tabs nav-justified">
    <li className="nav-item">
      <Link className="nav-link" to='/'><strong>Home</strong></Link>
    </li>
            <li className="nav-item">
      <Link className="nav-link" to='/login'><strong>Login</strong></Link>
    </li>
        <li className="nav-item">
      <Link className="nav-link" to='/convert'><strong>Temperature Converter</strong></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/resume'><strong>Resume</strong></Link>
      
    </li>
      
    <li className="nav-item">
      <Link className="nav-link" to='/zomatoapi'><strong>Zomato API</strong></Link>
    </li>
  </ul>
</div> 
    
            
            
    </div>        
        
        
        );
    }
    
}

export default Home;