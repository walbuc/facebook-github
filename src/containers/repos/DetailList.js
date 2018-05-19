import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import DetailItemList from '../../components/repos/DetailItemList';

class DetailList extends Component {
  renderContributors() {
    return map(this.props.repo.contributors, contributor => {
      return (
        <DetailItemList
          name={{ name: contributor.login, url: contributor.html_url }}
          key={contributor.id}
          contributions={contributor.contributions}
          avatar={contributor.avatar_url}
        />
      );
    });
  }

  render() {
    return <ul className="list-group">{this.renderContributors()}</ul>;
  }
}

function mapStateToProps({ repositories }) {
  return { repo: repositories.selectedRepo };
}

export default connect(mapStateToProps)(DetailList);
