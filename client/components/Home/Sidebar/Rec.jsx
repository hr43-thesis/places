import React from 'react';
import RecEntry from './RecEntry.jsx';

const Rec = ({ recs }) => (
  <div className="recommendations card-panel grey lighten-5 z-depth-1">
    <h5>Recommendations</h5>
    <div>
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
