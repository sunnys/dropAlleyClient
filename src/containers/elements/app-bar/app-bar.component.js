import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const AppBar = () => (
  <div>
    <section className="portal-pages__header">
      <div className="portal-pages__header-demo">
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
          <Typography variant="headline" gutterBottom>Welcome, Sunny</Typography>
          <p>
            Please enter the return number which you have copied before signing-up, please note that the return number is case-sensitive.
          </p>
          <h2>Please enter your return number</h2>
          <TextField
          id="full-width"
          label="Label"
          InputLabelProps={{
            shrink: true
          }}
          placeholder="Return number"
          helperText="Please enter your return number"
          fullWidth
          margin="normal"
          />
          <Button className={classNames("center")} color="primary" variant="raised" fullWidth>Submit</Button>
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);

export default AppBar;
