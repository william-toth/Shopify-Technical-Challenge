import React, { Component } from 'react';
import '../style.scss';

class Nomination extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  removeItem = () => {
    this.props.remove(this.props.movie.title);
  }

  render() {
    return (
      <div className="nom">
        <div className="nom-thing-holder">
          <h4>{this.props.movie.title}</h4>
        </div>
        <div className="nom-thing-holder">
          <img src={this.props.movie.poster} className="nom-img" />
        </div>
        <div className="nom-thing-holder">
          <button type="button" className="remove" onClick={() => this.removeItem()}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Nomination;
