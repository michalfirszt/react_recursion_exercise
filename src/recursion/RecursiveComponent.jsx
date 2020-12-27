import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  createTree = (Component, index) => {
    if (Component) {
      return <Component children={this.createTree(this.props.components[index + 1], index + 1)} />
    }
  };

  render() {
    return (
      <div>
        {this.createTree(this.props.components[0], 0)}
      </div>
    );
  }
};
