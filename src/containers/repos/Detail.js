import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailList from './DetailList';
import FetchError from '../../components/repos/Error';

class RepoDetail extends Component {
  render() {
    const { repo, error } = this.props;
    if (!repo && !error) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <FetchError message={error} />;
    }
    return (
      <div className="repo-detail col-md-8">
        <div className="details withPadding">
          <h2>Project {repo.name}</h2>
          <p>Description: {repo.description}</p>
          <h2>Contributors List:</h2>
          <DetailList />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ repositories }) {
  return { repo: repositories.selectedRepo, error: repositories.error };
}

export default connect(mapStateToProps)(RepoDetail);
