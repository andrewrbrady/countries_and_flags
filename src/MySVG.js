import React from 'react';

class MySVG extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    console.log(this)
  }

  render() {
    return (
      <img src={this.props.svgSrc} width="100%" height="auto"  />
    )
  }

}

export default MySVG

