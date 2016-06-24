import React from 'react';
import Gmap from '../Map/Gmap.jsx';


class MyPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'style',
      filterType: '',
    };
  }

  handleFilterType(e) {
    console.log('e: ', e.target.firstChild.nodeValue);
    console.log('this: ', this);
  }

  render() {
    return (
      <div>
        <h1>My Places</h1>
        <div className="1/3">
          Filter will go here
        </div>
        <div className="2/3">
          <div>
            <button onClick={(e) => { this.handleFilterType(e); }}> Starred </button>
            <button onClick={(e) => { this.handleFilterType(e); }}> Pinned </button>
          </div>
          <Gmap filterType={this.state.filterType} />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = function mapStateToProps(state) {
//   return {
//     places: state.places,
//   };
// };

// export default connect(mapStateToProps)(HomeContainer);
export default MyPlaces;
