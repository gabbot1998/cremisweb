import React from 'react'
import NameBox from './nameBox';
import Button from './button'
import VSpace from './../util/vSpace'
import './welcome.css'

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }



  render() {
    return(
      <body>
        <NameBox />
        <div class="welcome">Welcome to my personal page. Let's see what we can achieve together!</div>
        <VSpace padding={200}/>
        <div id="sc">
        <Button text="Enter" />
        </div>
        <VSpace padding={600}/>
        <div id="hb">
        <Button text="Can you see me?" />
        </div>
      </body>
    );
  }

}

export default Welcome;
