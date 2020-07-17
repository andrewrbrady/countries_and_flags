import React from 'react';
import Button from '@material-ui/core/Button';
import PortfolioItems from './PortfolioItems';

class LoadMoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    console.log(this)
  }

  render() {
    return (
      <Button size="large" color="primary" onClick={this.handleClick}>
      Load More
      </Button>

    )
  }

}

export default LoadMoreButton

