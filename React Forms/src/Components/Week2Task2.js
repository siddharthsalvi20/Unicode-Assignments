import React,{Component} from 'react';
import './mystyles.css';
class Sid2 extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            age:''
                    }
    }
    
    handleInputChange1=(event)=>{
        this.setState({
            name:event.target.value
        })
        
    }
    handleInputChange2=(event)=>{
        this.setState({
            age:event.target.value
        })
        
    }
    
    
    render(){
        const {name}=this.state;
        const {age}=this.state;
                return(
        
            <div className="main">
            
            <h2 className="m1"><ul>Enter The Following Details:</ul></h2>
            <p className="at1">Enter The Name:</p><input type='text' name='name' onChange={this.handleInputChange1}/>
             <p className="at1">Enter The Age:</p><input type='text' name='age' onChange={this.handleInputChange2}/>
           
            <br />
            <br />
            
            <div className="back">
            <h3 className="data"> My Name is {name} and my Age is {age}</h3>
            </div>
            </div>
  
        );
    }
}
export default Sid2;