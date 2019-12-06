import React,{Component} from 'react';
import axios from 'axios';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Sid2 extends Component{
     state = {
    items: [],
    isLoading: true,
      };

  getItems() {
    axios({
    
      url: "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16506627",
      headers: {
        "user-key": "d00d28200f4453c83557016ab8f70e74"
    }
    })
      
      .then(response => {
        this.setState({
          items: response.data.daily_menus[0].daily_menu.dishes,
          isLoading: false
        });
      })
            
  }
  
  componentDidMount() {
    this.getItems();
  }
  
  render() {
        return (
      <React.Fragment>
            <h1  id="main">foodfactory.com</h1>
            <div className="menu">
        <h1 className="text-info" id="heading">The Lunch Menu</h1>
        <div className=" text-warning">
          {!this.state.isLoading ? (
            this.state.items.map((value) => {
              
              return (
                <div key={value.dish.dish_id}>
                  <h2>{value.dish.name}</h2>
                  <h6 className="text-danger">{value.dish.price}</h6>
                  <hr />
                </div>
                  
              );
            
            })
          ) : (
            <h4 className="text-warning">Loading...</h4>
          )}
        </div>
</div>
      </React.Fragment>
    );
  }
}

export default Sid2;