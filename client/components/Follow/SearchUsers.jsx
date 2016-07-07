import React from 'react';

class SearchUsers extends React.Component {
  render() {
    return (
      <div className="input-field">
        <input
          id="search"
          type="search"
          placeholder="Find users to follow"
          ref="search"
          onChange={() => this.props.handleSearchUser(this.refs.search.value)}
        />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </div>
    );
  }
}

SearchUsers.propTypes = {
  handleSearchUser: React.PropTypes.func,
};

export default SearchUsers;
