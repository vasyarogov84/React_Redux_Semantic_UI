import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import callToGetUsers from '../api/users'
import { addUser } from '../actions';
import GoogleAuth from '../googleAuth/GoogleAuth';
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
    let value = e.target.value.trim();
    this.setState({ [stateProperty]: value });
  }

  checkButton = () => {
    const { first_name, last_name } = this.state;
    if (first_name && last_name) {
      return '';
    }
    return 'disabled';
  }
  redirect = async ({ first_name, last_name }) => {
    const usersInDataBase = await callToGetUsers.get('/');
    //console.log(usersInDataBase);
    const checkUser = await usersInDataBase.data.find(user => 
      user.first_name ===  first_name && user.last_name ===  last_name
      );
      //console.log(checkUser);
    if (checkUser) {
      await this.props.addUser({first_name, last_name });
      
      this.props.history.push('./pregame');
    } else {
      await this.props.addUser({ ...this.state, first_name, last_name });
      this.props.history.push('./pregame');
    }
    
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
          <Link
            className={`ui primary button ${this.checkButton()}`}
            to="/pregame"
            onClick={() => { this.redirect(this.state) }}
          >Submit</Link>
          <GoogleAuth redirect={this.redirect} />
        </Form>

      </div>
    )
  }
}

export default connect(null, { addUser })(Login);




