import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UncontrolledLottie from "./components/UncontrolledLottie.jsx";
import MySVG from "./MySVG";
import { Spring, animated, interpolate } from "react-spring/renderprops";

export default class PortfolioItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      limitTo: 10
    };
  }

  handleClick(increase = 10) {
    this.setState({
      limitTo: this.state.limitTo + increase
    });
    console.log(window.scrollY);
    const scrollPoint = window.innerHeight * 0.9;
    console.log(scrollPoint);
    window.scrollTo(0, window.scrollY + scrollPoint);
  }

  handleScroll = event => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      console.log("bottom");
      this.handleClick();
    }
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            limitTo: 10
          });
          this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
          });
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <UncontrolledLottie />
        </div>
      );
    } else {
      // console.log(items)
      const mapped_items = items
        .slice(0, this.state.limitTo)
        .map((item, index) => (
          <MyCard
            key={item.name}
            label={item.name}
            value={item.capital}
            flag={item.flag}
            index={index}
          />
        ));
      const load_more = (
        <Button
          onClick={() => {
            this.handleClick(10);
          }}
        >
          {" "}
          Button{" "}
        </Button>
      );
      return (
        <div>
          <div id="mapped-items"> {mapped_items}</div>
          <div id="load-more">{load_more}</div>
        </div>
      );
    }
  }
}

class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.value);
    console.log(this.children);
    console.log(this.props.flag);
  }
  render() {
    return (
      <div>
        <Spring
          native
          from={{ o: 0, xyz: [0, 100, 0] }}
          to={{ o: 1, xyz: [0, 0, 0] }}
        >
          {({ o, xyz }) => (
            <animated.div
              style={{
                transform: xyz.interpolate(
                  (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px`
                ),
                opacity: o.interpolate([1, 0], [1, 0.1, 0.5, 1])
              }}
            >
              <Card>
                <CardActionArea>
                  <MySVG svgSrc={this.props.flag} />
                  <CardMedia title="Contemplative Reptile" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {this.props.value}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Learn More `{" "}
                  </Button>
                </CardActions>
              </Card>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}
