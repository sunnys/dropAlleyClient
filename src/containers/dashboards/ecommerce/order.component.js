import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Select from '@material-ui/core/Select';
import SpaceImage from './../../../assets/images/calendar/1.jpg';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 500,
    height: 500
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

function Order(props) {
  const { classes, theme } = props;
  const { red } = require("@material-ui/core/colors")
  return (
    <div>
    <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
            <Grid key={1} item xs={12} sm={12} md={12} className={classes.portalWidget}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.cover}
                    image={SpaceImage}
                    title="Live from space album cover"
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="subheading" color="textSecondary">
                            DropAlley
                        </Typography>
                        <br/>
                        <br/>
                        <br/>
                        <Typography variant="headline">Live From Space</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Color: Black
                        </Typography>
                        <br/>
                        <br/>
                        <Typography variant="headline" color="red">
                            <red>
                                <b style={{color: "red"}}>
                                $70 <tr/><tr/>
                                </b>
                                VAT Included
                            </red>
                        </Typography>
                        <Typography component="p" gutterBottom>
                        <div>
                            30% Off
                            <s style={{marginLeft: "10px"}}> 
                            $100
                            </s> 
                        </div>
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="p" gutterBottom>
                            <Button href="/login" color="secondary" variant="raised">
                            <FavoriteBorderIcon/> <tr/> Add to favorite
                            </Button>
                        </Typography>
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Size</InputLabel>
                                <Select
                                native
                                inputProps={{
                                    id: 'age-native-simple'
                                }}
                                >
                                    <option value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <Button href="/login" color="secondary" variant="raised">Try and Buy</Button>  
                            </FormControl>
                        </Grid>
                        <br/>
                        <br/>
                        <Typography component="p" gutterBottom>
                        Welcome to DropAlley. Sign-in using your social media accounts to return your Orders or browse through several "try-and-buy" Orders near you.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Grid>

      <Card className={classes.card}>
        
        <div className={classes.details}>
          
        </div>
        
      </Card>
    </div>
  );
}

Order.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Order);