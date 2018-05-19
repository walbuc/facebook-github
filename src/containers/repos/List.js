import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import ItemList from '../../components/repos/ItemList';
import * as actions from '../../actions';

class ReposList extends Component {
  renderRepos() {
    return map(this.props.repositories, repo => {
      return (
        <ItemList
          name={repo.name}
          id={repo.id}
          key={repo.id}
          onRepoSelect={this.props.fetchDetails}
        />
      );
    });
  }

  render() {
    if (!this.props.repositories) return '';
    return (
      <div className="col-md-4 withPadding">
        <h2>facebook Repositories</h2>
        <ul className="list-group" id="right">
          {this.renderRepos()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ repositories }) {
  return { repositories: repositories.repos };
}

export default connect(mapStateToProps, actions)(ReposList);
