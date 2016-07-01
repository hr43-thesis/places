import React from 'react';


const BotEntry = (props) => {
  let classProp = '';
  let symbol = '';
  if (props.bot.posting) {
    classProp = 'btn-floating btn-small waves-effect waves-light red';
    symbol = 'stop';
  } else {
    classProp = 'btn-floating btn-small waves-effect waves-light green';
    symbol = 'message';
  }

  return (
    <div>
      <div className="card-panel grey lighten-5 z-depth-1 hoverable">
        <div className="row valign-wrapper">
          <div className="col s1">
            <a
              className={classProp}
              onClick={() => props.handlePost(props.bot.id, props.bot.posting)}
            >
              <i className="material-icons">{symbol}</i>
            </a>
          </div>
          <div className="col s3 push-s5 offset-s2">
            <img src={props.bot.imageUrl} alt="" className="responsive-img" />
          </div>
          <div className="col s1">
            <i className="material-icons">stars</i>
            {props.bot.location}
          </div>
          <div className="col s5 pull-s5 offset-s1">
            <span className="black-text">
              <h5 className="valign-wrapper">
                {props.bot.name}
              </h5>
              {' '}
              {JSON.stringify(props.bot.posting)}
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};

BotEntry.propTypes = {
  bot: React.PropTypes.object,
  posting: React.PropTypes.bool,
  handlePost: React.PropTypes.func,
};

export default BotEntry;
