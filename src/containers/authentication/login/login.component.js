import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import themeStyles from './login.theme.style';
import scss from './login.module.scss';

import logoImage from '../../../assets/images/portal-logo.png';
import { GoogleLogin } from 'react-google-login';


import { login } from '../../../state/user/user.creators';
import { isUserAuthenticated } from '../../../state/user/user.selectors';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.responseGoogle=this.responseGoogle.bind(this);
    this.state = {
      email: 'testuser@example.com',
      password: 'secret'
    };
  }
  // Flip container to column on mobile screens.
  
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    width: PropTypes.string.isRequired
  };

  responseGoogle = (response) => {
    console.log(response.profileObj);
    this.handleFormSubmit();
  }
  
  handleFormSubmit = () => {
    console.log("Login Action");
    console.log("State: ", this.state);
    this.props.actions.login({ ...this.state });
  };

  render(){
    const panelDirection = this.props.width === 'xs' ? 'column' : 'row';
    // const responseGoogle = (response) => {
      // console.log(response);
      // this.handleFormSubmit();
    // }
    return(
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={this.props.classes.background}
      >
        <Grid item sm={6} xs={12} className={scss.panel}>
          <Grid direction={panelDirection} container spacing={0}>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={classNames(scss.card, this.props.classes['primary-card'])}>
                <CardContent className={scss['signup-content']}>
                  <img src={logoImage} className={scss['signup-logo']} alt="logo" />
                  <Typography variant="headline" component="h2" gutterBottom>
                    DropAlley
                  </Typography>
                  <Typography component="p" gutterBottom>
                  Welcome to DropAlley. Sign-in using your social media accounts to return your products or browse through several "try-and-buy" products near you.
                  </Typography>
                  <Typography component="p" gutterBottom>
                  With "try-and-buy" you can get ask us to get a product to your home for atrial before you buy it.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={scss.card }>
                <CardContent className={scss.cardcontent}>
                  <Button href="/login" color="primary" variant="raised">Login With FACEBOOK</Button>
                  <br/>
                  <GoogleLogin
                    clientId={'762029072380-444gurofrhj6ngqn9d5u5fh53smjg980.apps.googleusercontent.com'}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  >
                  <span> Login with Google</span>
                  </GoogleLogin>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: isUserAuthenticated()
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(
        {
          login
        },
        dispatch
      )
    }
  }
} 

export default compose(connect(mapStateToProps, mapDispatchToProps), withWidth(), withStyles(themeStyles, { withTheme: true }))(Login);
