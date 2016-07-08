import React from 'react';

class SearchUsers extends React.Component {
  render() {
    return (
      <div className="row valign-wrapper">
        <div className="col">
          <i className="material-icons">search</i>
        </div>
        <div className="col input-field s12">
          <input
            id="search"
            type="search"
            placeholder="Find users to follow"
            ref="search"
            onChange={() => this.props.handleSearchUser(this.refs.search.value)}
          />
        </div>
      </div>
    );
  }
}

SearchUsers.propTypes = {
  handleSearchUser: React.PropTypes.func,
};

export default SearchUsers;
