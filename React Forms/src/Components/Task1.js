
 import React,{Component} from 'react';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Sid2 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:0,
            count1:0,
            count2:0
            
           
        }
    }
    
    handleInputChange1=(event)=>{
        this.setState({
            name:event.target.value
        })
        
    }
    
   increment(){
        this.setState({
            count1:this.state.name*(9/5)+32,
            count2:this.state.name*(1)+273
        })
    }
    
    render(){
                
        return(
        
            <div className="main">
            
            <h2 className="m1"><ul>Temperature Calculator</ul></h2>
            <p className="at1">Enter The Temperature in Degree Celcius:</p><input type='number' name='name' onChange={this.handleInputChange1}/>
                         
            <br />
            <button className='btn btn-info' onClick={()=>this.increment()}>Convert</button>
            <br />
            <h2 className="m1"><ul>Result:</ul></h2>
            <div className="back">
            <h3 className="data">Fahreneit :</h3> <h5 className="val">{this.state.count1}</h5>
            <h3 className="data">Kelvin :</h3> <h5 className="val">{this.state.count2}</h5>    
                        </div>
            </div>
  
        );
    }
}
export default Sid2;