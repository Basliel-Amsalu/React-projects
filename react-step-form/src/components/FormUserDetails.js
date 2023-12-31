import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="enter user details"/>
            <TextField hintText="enter f name"
            floatingLabelText="firstname"
            onChange={handleChange('firstName')}
            defaultValue= { values.firstName}
            /><br/>
            <TextField hintText="enter l name"
            floatingLabelText="lastname"
            onChange={handleChange('lastName')}
            defaultValue= { values.lastName}
            /><br/>
            <TextField hintText="enter email"
            floatingLabelText="email"
            onChange={handleChange('email')}
            defaultValue= { values.email}
            /><br/>
            <RaisedButton 
               label="contine"
               primary={true}
               style = {styles.button}
               onClick={this.continue}
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
export default FormUserDetails