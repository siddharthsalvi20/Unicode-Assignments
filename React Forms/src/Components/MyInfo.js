import React,{Component} from 'react';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Sid2 extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            age:'',
            marks:'',
            score:'',
            school:'',
            college:''
           
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
    handleInputChange3=(event)=>{
        this.setState({
            marks:event.target.value
        })
        
    }
    handleInputChange4=(event)=>{
        this.setState({
            score:event.target.value
        })
        
    }
     handleInputChange5=(event)=>{
        this.setState({
            school:event.target.value
        })
        
    }
      handleInputChange6=(event)=>{
        this.setState({
            college:event.target.value
        })
        
    }
    
    render(){
        const {name}=this.state;
        const {age}=this.state;
        const{marks}=this.state;
        const{score}=this.state;
            const{school}=this.state;
            const{college}=this.state;
        return(
        
            <div className="main">
            
            <h2 className="m1"><ul>Enter The Following Details:</ul></h2>
            <p className="at1">Enter The Name:</p><input type='text' name='name' onChange={this.handleInputChange1}/>
             <p className="at1">Enter The Age:</p><input type='text' name='age' onChange={this.handleInputChange2}/>
             <p className="at1">Enter The 10th Marks:</p><input type='text' name='marks' onChange={this.handleInputChange3}/>
            <p className="at1">Enter The 12th Marks:</p><input type='text' name='score' onChange={this.handleInputChange4}/>
            <p className="at1">Enter The School Name:</p><input type='text' name='school' onChange={this.handleInputChange5}/>
            <p className="at1">Enter The College Name:</p><input type='text' name='college' onChange={this.handleInputChange6}/>
            <br />
            <br />
            <h2 className="m1"><ul>My Resume:</ul></h2>
            <div className="back">
            <h3 className="data">Name :</h3> <h5 className="val">{name}</h5> 
            <h3 className="data">Age :</h3> <h5 className="val">{age}</h5>
            <h3 className="data">10th Marks:</h3> <h5 className="val">{marks}</h5>
            <h3 className="data">12th Marks:</h3> <h5 className="val">{score}</h5>
            <h3 className="data">School Name:</h3> <h5 className="val">{school}</h5>
            <h3 className="data">College Name:</h3> <h5 className="val">{college}</h5>
            </div>
            </div>
  
        );
    }
}
export default Sid2;