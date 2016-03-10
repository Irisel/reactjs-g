import React from '/usr/local/lib/node_modules/react';

const RepoList = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,
      data: null
    };
  },

  componentDidMount: function() {
    var _this = this;
    this.props.promise.then(
      function(value){return _this.setState({loading: false, data: value})},
      function(error){return _this.setState({loading: false, error: error})});
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});

module.exports = RepoList;