import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class Detail extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state ={
      data:[]
    }
  }
  componentDidMount =() =>{
     axios.get('https://swapi.co/api/planets/?search='+this.props.match.params.name)
      .then( (response) =>{
        

        this.setState(
            {data:response.data.results[0]}
          )
      })
      .catch((error) =>{
        console.log(error);
      });
 
 
  }
  
  render() {
    console.log(this.state.searchResults);
    return (
      <div>
        <div className="search-wrapper">
          <Paper className={"paper"}>
            <Typography component="h1" variant="h5">
              Details
            </Typography>
               <div>
                {
                  this.state.data &&  <div>
                                        <div>Name - {this.state.data.name}</div>
                                        <div>Rotation - {this.state.data.rotation_period}</div>
                                      </div>
                }
               </div>
            </Paper>
        </div>
        <div className="logout"><Link to="/">Logout</Link></div>
      </div>
    );
  }
}
export default Detail;


