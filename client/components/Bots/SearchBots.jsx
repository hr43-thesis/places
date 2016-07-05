import React from 'react';

class SearchUsers extends React.Component {
  render() {
    return (
      <div>
        <input
          // style={{ position: 'fixed' }}
          type="text"
          placeholder="Find a bot..."
          ref="search"
          onChange={() => this.props.handleSearchUser(this.refs.search.value)}
        />
      </div>
    );
  }
}

SearchUsers.propTypes = {
  handleSearchUser: React.PropTypes.func,
};

export default SearchUsers;
