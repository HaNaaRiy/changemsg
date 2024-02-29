import React from 'react'
import Message from './Message';
import Login from './Login';
import Logout from './Logout';

//Parent Homepage Component

class Homepage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLoggedIn: false,
      };
      this.ifLoginClicked = this.ifLoginClicked.bind(this);
      this.ifLogOutClicked = this.ifLogOutClicked.bind(this);
    }
    ifLoginClicked() {
      this.setState({ isLoggedIn: true });
    }
  
    ifLogOutClicked() {
      this.setState({ isLoggedIn: false });
    }
    render() {
      return (
        <div>
          <Message isLoggedIn={this.state.isLoggedIn} />
          {this.state.isLoggedIn ? (
            <Logout clickFunc={this.ifLogOutClicked} />
          ) : (
            <Login clickFunc={this.ifLogInClicked} />
          )}
        </div>
      );
    }
  }

  export default Homepage