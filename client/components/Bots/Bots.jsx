import React from 'react';
// import SearchBots from './SearchBots.jsx';
import BotsList from './BotsList.jsx';
import Geosuggest from 'react-geosuggest';

class Bots extends React.Component {
  componentWillUnmount() {
    this.props.toggleBotSelect({
      moveBot: false,
      postBot: false,
    });
  }

  onOriginSelect(origin) {
    this.props.setOrigin({
      origin: origin.gmaps.formatted_address,
    });
  }

  onDestinationSelect(destination) {
    this.props.setDestination({
      destination: destination.gmaps.formatted_address,
    });
  }

  onPostSelect(postCenter) {
    this.props.setPostCenter({
      postCenter: postCenter.gmaps.formatted_address,
    });
  }

  handleClick(e) {
    if (e.target === this.refs[0]) {
      this.refs[0].checked = true;
      this.refs[1].checked = false;

      this.props.toggleBotSelect({
        moveBot: false,
        postBot: true,
      });
    } else {
      this.refs[0].checked = false;
      this.refs[1].checked = true;

      this.props.toggleBotSelect({
        moveBot: true,
        postBot: false,
      });
    }


    // console.log(e, this.refs, this);
    // console.log('ref1: ', this.refs[0]);
    // // this.refs[0].checked = false;
    // console.log('ref2: ', this.refs[1]);
  }

  render() {
    const { bots, handlePost, addBot, handleMoving, botsList } = this.props;
    return (
      // <div className="container">
      <div className="container">
        <div className="col s8 push-s2">
          <h1> Bot list </h1>
          <div>
            <form
              action="#"
              style={{
                textAlign: 'center',
                marginBot: '1%',
              }}
            >
              <p>
                <input
                  ref="0"
                  type="radio"
                  id="post"
                  onClick={(e) => this.handleClick(e)}
                />
                <label htmlFor="post">Posting Bot</label>
              </p>
              <p>
                <input
                  ref="1"
                  type="radio"
                  id="move"
                  onClick={(e) => this.handleClick(e)}
                />
                <label htmlFor="move">Moving Bot</label>
              </p>
            </form>
            <div className="row">
              {botsList.moveBot || botsList.postBot ?
                <div
                  className="col s2"
                  style={{
                    textAlign: 'center',
                    marginTop: '3%',
                  }}
                >
                  <a
                    className="btn-floating btn-small waves-effect waves-light green"
                    onClick={() => {
                      if (botsList.moveBot) {
                        addBot('moving', null, botsList.origin, botsList.destination);
                      } else {
                        addBot('posting', botsList.postCenter);
                      }
                    }
                    }
                  >
                    <i className="material-icons">add</i>
                  </a>
                </div> : null
              }
              {botsList.moveBot ?
                <div>
                  <Geosuggest
                    className="col s5"
                    placeholder="Origin"
                    onSuggestSelect={(e) => this.onOriginSelect(e)}
                  />
                  <Geosuggest
                    className="col s5"
                    placeholder="Destination"
                    onSuggestSelect={(e) => this.onDestinationSelect(e)}
                  />
                </div> : null
              }
              {botsList.postBot ?
                <Geosuggest
                  className="col s7"
                  placeholder="Origin"
                  onSuggestSelect={(e) => this.onPostSelect(e)}
                /> : null
              }
            </div>
            { /* <SearchBots
              handleSearchUser={handleSearchUser}
            /> */ }
          </div>
          <div className="col s8 push-s2">
            <BotsList
              bots={bots}
              handlePost={handlePost}
              handleMoving={handleMoving}
            />
          </div>
        </div>
      </div>
    );
  }
}

Bots.propTypes = {
  bots: React.PropTypes.array,
  handlePost: React.PropTypes.func,
  addBot: React.PropTypes.func,
  handleSearchUser: React.PropTypes.func,
  handleMoving: React.PropTypes.func,
  toggleBotSelect: React.PropTypes.func,
  botsList: React.PropTypes.object,
  setPostCenter: React.PropTypes.func,
  setOrigin: React.PropTypes.func,
  setDestination: React.PropTypes.func,
};

export default Bots;
