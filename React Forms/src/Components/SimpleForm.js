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
    
 
    
    render(){
        const {name}=this.state;
        const {age}=this.state;
        const{marks}=this.state;
        const{score}=this.state;
            const{school}=this.state;
            const{college}=this.state;
        return(
        
            <div className="main">
            <form>
            <h1 id="heading" className="text-">Resume</h1>
            <h2 className="m1">Enter The Following Details:</h2>
            <p className="at1">Enter The Name:</p><input type='text' name='name' />
             <p className="at1">Enter The Age:</p><input type='text' name='age' />
             <p className="at1">Enter The 10th Marks:</p><input type='text' />
            <p className="at1">Enter The 12th Marks:</p><input type='text' name='score' />
            <p className="at1">Enter The School Name:</p><input type='text' name='school' />
            <p className="at1">Enter The College Name:</p><input type='text' name='college' />
            <br />
            <br />
            <button  className='btn btn-success'>Submit Details</button>
            </form>
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