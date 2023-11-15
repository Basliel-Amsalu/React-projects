import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="enter personal details"/>
            <TextField hintText="enter ocupation"
            floatingLabelText="occupation"
            onChange={handleChange('occupation')}
            defaultValue= { values.occupation}
            /><br/>
            <TextField hintText="enter city"
            floatingLabelText="city"
            onChange={handleChange('city')}
            defaultValue= { values.city}
            /><br/>
            <TextField hintText="enter bio"
            floatingLabelText="bio"
            onChange={handleChange('bio')}
            defaultValue= { values.bio}
            /><br/>
            <RaisedButton 
               label="contine"
               primary={true}
               style = {styles.button}
               onClick={this.continue}
            />
            <RaisedButton 
               label="back"
               primary={true}
               style = {styles.button}
               onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails