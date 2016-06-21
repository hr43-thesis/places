import React from 'react';

const SearchUsers = ({ handleSearchUser }) => (
  <div>
    <input
      type="text"
      placeholder="Find a friend..."
      ref="search"
      onKeyPress={handleSearchUser}
    />
  </div>

);

SearchUsers.propTypes = {
  handleSearchUser: React.PropTypes.object,
};

export default SearchUsers;
