import React from 'react';

const RecEntry = ({ rec }) => (
  <div>
    {rec}
  </div>
);

RecEntry.propTypes = {
  rec: React.PropTypes.string,
};

export default RecEntry;
