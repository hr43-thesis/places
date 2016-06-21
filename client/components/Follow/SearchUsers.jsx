import React from 'react';

class SearchUsers extends React.Component() {
  handleSearchUser(input) {
    const { users } = this.props;
    if (users.indexOf(input) > 0) {
      
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this.handleSearchUser(input)} />
      </div>
    );
  }
}

export default SearchUsers;
