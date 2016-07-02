import React from 'react';
import SearchBots from './SearchBots.jsx';
import BotsList from './BotsList.jsx';

class Bots extends React.Component {

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
    const { bots, handlePost, addBot, handleSearchUser, handleMoving, botsList } = this.props;
    return (
      // <div className="container">
      <div className="row">
        <div className="col s8 push-s2">
          <h1> Bot list </h1>
          <div>
            <form action="#">
              <p>
                <input
                  ref="0"
                  name="group1"
                  type="radio"
                  id="post"
                  onClick={(e) => this.handleClick(e)}
                />
                <label htmlFor="post">Posting Bot</label>
              </p>
              <p>
                <input
                  ref="1"
                  name="group2"
                  type="radio"
                  id="move"
                  onClick={(e) => this.handleClick(e)}
                />
                <label htmlFor="move">Moving Bot</label>
              </p>
            </form>
            <a
              className="btn-floating btn-small waves-effect waves-light green"
              onClick={() => {
                console.log('origin: ', this.refs);

                // console.log('origin: ', this.refs.origin.value);
                // console.log('destination: ', this.refs.destination.value);
                console.log('post center: ', this.refs.postCenter.value);
                if (botsList.moveBot) {
                  addBot('moving');
                } else {
                  addBot('posting');
                }
              }
              }
            >
              <i className="material-icons">add</i>
            </a>
            <span> Add Bot </span>
            {botsList.moveBot ?
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">location_on</i>
                      <input ref="origin" id="icon_prefix" type="text" className="validate" />
                      <label htmlFor="icon_prefix">Origin</label>
                    </div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">location_on</i>
                      <input
                        ref="destination"
                        id="icon_telephone"
                        type="tel"
                        className="validate"
                      />
                      <label htmlFor="icon_telephone">Destination</label>
                    </div>
                  </div>
                </form>
              </div> : null
            }
            {botsList.postBot ?
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">person_pin</i>
                      <input ref="postCenter" id="icon_prefix" type="text" className="validate" />
                      <label htmlFor="icon_prefix">Post Center</label>
                    </div>
                  </div>
                </form>
              </div> : null
            }
          </div>
          <SearchBots
            handleSearchUser={handleSearchUser}
          />
        </div>
        <div className="col s8 push-s2">
          <BotsList
            bots={bots}
            handlePost={handlePost}
            handleMoving={handleMoving}
          />
        </div>
      </div>
      // </div>
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
};

export default Bots;
