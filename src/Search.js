import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      searchResults:[]
    }
  }
  searchData = (e) =>{
    let val = e.target.value;
    if(!val)
    {
      this.setState({
        searchResults:[]
      });
      return false;
    }
    axios.get('https://swapi.co/api/planets/?search='+val)
      .then( (response) =>{
        

        this.setState(
            {searchResults:response.data.results}
          )
      })
      .catch((error) =>{
        console.log(error);
      });
 
  }
  render() {
  
    return (
      <div>
        <div className="search-wrapper">
          <Paper className={"paper"}>
            <Typography component="h1" variant="h5">
              Search
            </Typography>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="search">Enter Planet Name</InputLabel>
                  <Input id="search" type="search" onChange={this.searchData} name="search" autoComplete="off" autoFocus />
                </FormControl>
                <div className="search-results">
                  {
                    this.state.searchResults && this.state.searchResults.map((val,i)=>{
                      return(<div key={i} style={{fontSize:val.population.substring(0, 2)+"px"}}><Link to={"/detail/"+val.name}>{val.name}</Link></div>);
                    })
                  }
                </div>
            </Paper>
        </div>
        <div className="logout"><Link to="/">Logout</Link></div>
      </div>
    );
  }
}
export default Search;


