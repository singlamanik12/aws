import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Disp from './disp'
import Nav from './nav1';
import "./fetch.css"

class Fetch extends Component{

    constructor(props) {
        super(props);
        this.state = {
            resname: '',
            citys : null,
            cityname: null,
            redirectToSeach: false,
            a:[]
        };
    }


    onChangeHandeler = () => {
        return async (e) => {
            const { value:cityname } = e.target;
            await this.setState({ cityname });
            
        }
    }

    handleSubmit = () => {
        return async (e) => {
            const { cityname } = this.state;

   
            const url = `https://developers.zomato.com/api/v2.1/locations?query=${cityname}`;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'user-key': 'ca11f3179ff24e27cd60c149e9ca900c',
                    'content-type':'application-json'
                }
            });
            const citys = await res.json();
            console.log(citys.location_suggestions);
            await this.setState({ citys: citys, redirectToSeach: true });

        }
        console.log(this.citys)
    }

    render()
    {     
        if(this.state.citys ){
            if(this.state.citys.location_suggestions.length !== 0)
            return <Disp lat={this.state.citys.location_suggestions[0].city_id} long={this.state.citys.location_suggestions[0].city_name} />
            else
            {
                alert("Please Enter Valid City");
                window.location="/fetch";
            }
        }
            return <>
            <div className="FE">
            <Nav></Nav>
              <p className="quote" ><span className="s1"></span><br/>
            <center> <h3>Search for your favourite restaurants in city</h3><br/>
             <form class="example" onSubmit={(e) => e.preventDefault()} >
              <input type="text" 
                placeholder="Search.." 
                name="search"
                onChange={this.onChangeHandeler()}
                length='15px'
                />
              <button type="submit" onClick={this.handleSubmit()}><b>Search</b></button></form>
              </center>
                  <br/><br/>
                 </p>
                 </div>
            </>
        }
    }
export default Fetch;
