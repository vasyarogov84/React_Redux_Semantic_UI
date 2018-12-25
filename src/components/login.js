import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addUser } from '../actions';
import '../styles/login.css';

class Login extends Component {
  state = {
    first_name: '',
    last_name: '',
    id: uuid(),
    best_time: 0,
    attempts: 0
  }

  setValues = (e) => {
    let stateProperty = e.target.name;
    let value = e.target.value;
    this.setState({ [stateProperty]: value });
}

checkButton = () => {
  const { first_name, last_name } = this.state;
   if (first_name && last_name ) {
      return  '';
   } 
   return 'disabled';
 }
  render() {

    return (
      <div className="ui raised very padded text container segment form">
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' name="first_name" value={this.state.first_name}
              onChange={this.setValues}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' name="last_name" value={this.state.last_name}
              onChange={this.setValues}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Link

            className={`ui primary button ${this.checkButton()}`}
            to="/pregame"
            onClick={() => { this.props.addUser(this.state) }}
          >Submit</Link>
        </Form>

      </div>
    )
  }
}

export default connect(null, { addUser })(Login);




