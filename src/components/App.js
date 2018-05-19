import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ReposList from '../containers/repos/List';
import Detail from '../containers/repos/Detail';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchRepositories();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Detail />
        <ReposList />
      </div>
    );
  }
}

export default connect(null, actions)(App);
