import React from 'react';
import Welcome from './../welcome/welcome';
import { Link, animateScroll as scroll} from "react-scroll";
import VSpace from './../util/vSpace'
import LongText from './longText'
import TopBar from './topBar'

import './home.css';

const prideColors = [ {backgroundColor: "rgba(234, 62, 55, 0.9)"},
                      {backgroundColor: "rgba(246, 143, 31, 0.9)"},
                      {backgroundColor: "rgba(246, 213, 9, 0.9)"},
                      {backgroundColor: "rgba(168, 203, 56, 0.9)"},
                      {backgroundColor: "rgba(32, 154, 207, 0.9)"},
                      {backgroundColor: "rgba(170, 82, 160, 0.9)"},
                     ];

//The entire application will live inside of the home component!
class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {colorIndex: 0, currentColor: {}, updateColor: true, topBar: <div></div>, hasRenderedTopBar: false};
    this.updateColor = this.updateColor.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.interval = setInterval(() => {
      if(this.state.updateColor){
        this.setState({colorIndex: (this.state.colorIndex + 1) % prideColors.length});
      }
      this.updateColor();},
      1000);
  }

  componentWillUnmount() {
    console.log("unmountes");
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if(window.pageYOffset > 167){

      if(!this.state.hasRenderedTopBar){
        this.setState({updateColor: false});
        this.setState({topBar: <TopBar currentColor={this.state.currentColor} onClick={console.log("hej")} onPointerLeave={console.log("hej då")}/>});
        this.setState({hasRenderedTopBar: true});
      }
    } else {
      this.setState({updateColor: true});
      this.setState({topBar: <div></div>});
      this.setState({hasRenderedTopBar: false});

    }
  }

  updateColor() {
    this.setState({currentColor: prideColors[this.state.colorIndex]});
  }

  render() {
    return(
      <body id="topOfBody">
        <div>
          {this.state.topBar}
          <Welcome currentColor={this.state.currentColor} onClick={this.updateToggle}/>
          <VSpace padding={5000} />
          </div>

          <div>
            <h1 onClick={this.scrollToTop}>Back to top!</h1>
          </div>
      </body>
    );
  }

}

export default Home;
