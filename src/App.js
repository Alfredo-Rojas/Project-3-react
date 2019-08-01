import React from 'react';
import './App.css';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import AuthService from './services/AuthService';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfChatRoom: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
    };

    this.service = new AuthService();

  }

  render() {
    console.log('+_+_+_+_+_+_+_+_+_+', this.state);
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    );
  }
}

export default App;
