import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'
import './design.css';

class Disp extends Component {
    state = {
        items: []
    }
    componentDidMount(){
        console.log(this.props);
        fetch("https://developers.zomato.com/api/v2.1/search?entity_id="+this.props.lat+"&entity_type=city&q="+this.props.long+"&sort=rating&order=desc&apikey=41f007a2a3d893db5e6ffebcf8cc8bb8")
        .then(res =>{
            if(res.ok){
                return res.json();
            }
        })
        .then(
        (result) => {
            console.log(result.restaurants[0].restaurant)
            this.setState({
            isLoaded: true,
            items: result.restaurants
            });
            
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }render() {
        return (
           <div className="nam">
            <ul className="d-flex flex-row flex-wrap align-content-stretch" style={{listStyleType:"none"}}>
        
            {this.state.items.map(item => (
            
            <li className="mb-2 mt-2 mr-2 ml-2">
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.restaurant.thumb} alt="Image Not Available"/>
      <Card.Body>
        <Card.Title>{item.restaurant.name}</Card.Title>
        <Card.Text>{item.restaurant.location.address}
        </Card.Text>
        <Button  className="bg-dark text-light"><a href={item.restaurant.menu_url}  style={{color:'white',textDecoration: 'none'}}>ORDER NOW</a></Button>
            {item.restaurant.user_rating.aggregate_rating} 
        
      </Card.Body>
    </Card>
                    
            </li>
    
                
            
                
            ))}
            </ul>
            </div>
        )
    }
}

export default Disp;




