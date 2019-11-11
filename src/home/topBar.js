import React from 'react';
import VSpace from './../util/vSpace';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './topBar.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <React.Fragment>
              <div class="stickyTopBar" style={this.props.currentColor}>{this.props.text}</div>
      </React.Fragment>
    );
  }
}

export default TopBar;
