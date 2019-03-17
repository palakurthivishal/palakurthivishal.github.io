import React, { Component } from 'react';
import { connect} from 'react-redux'
import './App.css';

import RootContainer from './containers/RootContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.fetchUserData();
  }

  async fetchUserData() {
    const url = "http://localhost:3000/profile.json";
    const response = await fetch(url);
    const json = await response.json();
    this.props.loadProfileData(json);
  }

  render() {
    return (
        <div className="App">
          <RootContainer />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProfileData: data => {
      dispatch({
        type: "FETCH_PROFILE_DATA_SUCCESS",
        payload: data
      })
    }
  }
}

export default connect(undefined, mapDispatchToProps)(App);



