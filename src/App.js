import React from 'react';
import './App.css';
import SignUp from './components/signup/SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfChatRoom: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
    }
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
