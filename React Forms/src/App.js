import React,{Component} from 'react';
import './Components/mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Components/MyInfo.js';

/*import Home from './Components/homepage.js';
import Converter from './Components/Task1.js';
import LoginForm from './Components/Week2Task2.js';
import Zomato from './Components/zomatoapi.js';
import Information from './Components/MyInfo.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const Homepage=()=>{
    
    return(
    <Router>
    <div>
    <Home />    
    <Route path='/convert' component={Converter} />
    <Route path='/login' component={LoginForm} />
    <Route path='/zomatoapi' component={Zomato}/>
    <Route path='/resume' component={Information}/>    
        
    </div>      
        
    </Router>*/
class App extends Component{
    
        
    render(){
        
        
        return(
        <div className="App">
            
        <Form1></Form1> 
        </div>

        
        );
    }
}

export default App;

   
