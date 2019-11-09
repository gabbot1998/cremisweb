import React from 'react';
import { Link, animateScroll as scroll} from "react-scroll";

import './nameBox.css';

  const name = "CREMIS";
  const nameBox = "nameBoxRed";
  const nameBoxPink = "nameBoxPink";
  const prideColors = [ "nameBoxRed", "nameBoxOrange", "nameBoxYellow",
                        "nameBoxGreen", "nameBoxBlue", "nameBoxPurple"];

class NameBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: name, nameBox: nameBox, index: 0};
    this.updateNameBox = this.updateNameBox.bind(this);
  }

  updateNameBox(event) {
    this.setState({nameBox: prideColors[this.state.index]});
  }

  getNextIndex() {

  }

  componentDidMount() {
    this.setState({name: name})
    this.interval = setInterval(() => {
      this.setState({index: (this.state.index + 1) % prideColors.length});
      this.updateNameBox();},
      1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div onClick={scroll.scrollToBottom} class={this.state.nameBox} style={this.props.currentColor}> {this.state.name}</div>
    );
  }

}

export default NameBox;
