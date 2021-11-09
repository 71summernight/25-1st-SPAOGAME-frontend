import React from 'react';

export default class ImageToggle extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="spao logo"
          src={'/images/red.png'}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
