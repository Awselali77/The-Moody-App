/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Moody
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Login extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        const classes = useStyles();

        this.updateemail= this.updateemail.bind(this);
        this.updatePassword= this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
    updateemail(evt) {
      this.setState({
        email : evt.target.value
      });
    }
    updatePassword(evt) {
      this.setState({
          password : evt.target.value
        });
      }

    handleSubmit =  e => {
        e.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.password,   
        };

        console.log(user)
        axios.post('http://localhost:5000/login',user)
        .then(function (response) {
          console.log(response);
     if(response.data === "User log in"){
            window.location = "/profile"
          }else{
            alert(' TRY AGAIN!!!')}
        })
         }

  render() {
    return (
      <Container component="main" maxWidth="xs">
              <CssBaseline />

      <div >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

          <form onSubmit={this.handleSubmit}  noValidate>
          <label >E-Mail Address :</label>
            <TextField variant="outlined" margin="normal" fullWidth id="email" label="Email Address" autoComplete="email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.updateemail} required autoFocus />
            
            <TextField variant="outlined" margin="normal" fullWidth id="password" autoComplete="current-password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword} required/>
            <br /><FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

<Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href="http://localhost:3000/"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box> 
      </Container>

    );
  }
}

export default Login;