import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import withStyles from '@material-ui/core/styles/withStyles';

import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      loggedIn:false
    }
  }
  handleSubmit = (e)=>
  {
    e.preventDefault();
    this.setState(
        {
          loggedIn:true
        }
      )
  }
  render() {
    return (
      <div className="login-wrapper">

        {this.state.loggedIn && <Redirect to="/search"/>}
        <Paper className={"paper"}>
          
          <Typography component="h1" variant="h5">
            Login
          </Typography>
            <form method="post" className={"form"} onSubmit={this.handleSubmit}
                                                  >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username"  name="username" autoComplete="username" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={"submit"}
                >
                  Login
                </Button>
              
            </form>
          </Paper>

      </div>
    );
  }
}
export default Login;


