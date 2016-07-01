import React from 'react';
import { Link } from 'react-router';

const Rec = () => (
  <div className="recommendations card-panel grey lighten-5 z-depth-1">
    <h5>Recommendations</h5>
    <button><Link to="/locate">Locate</Link></button>
  </div>
);

export default Rec;
