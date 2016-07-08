import React from 'react';
import RecEntry from './RecEntry.jsx';

const Rec = ({ recs }) => (
  <div>
    <div className="card-panel blue-grey lighten-5 z-depth-1">
      <h6>Discover New Places</h6>
    </div>
    <div className="card-panel grey lighten-5 z-depth-1">
      {recs.map((rec, i) =>
        <RecEntry key={i} rec={rec} />
      )}
    </div>
  </div>
);

Rec.propTypes = {
  recs: React.PropTypes.array,
};

export default Rec;
