import React from 'react'

import './topBar.css'

class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {show: true};
  }

  render() {
    return(
      <React.Fragment>
          <nav id="topBar" className="navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#">
              <div class="stickyTopBar" style={this.props.currentColor}>CREMIS</div>
            </a>
          </nav>
        </React.Fragment>
    );
  }
}

export default TopBar;
