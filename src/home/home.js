import React from 'react';
import Welcome from './../welcome/welcome';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import VSpace from './../util/vSpace';
import LongText from './longText';
import TopBar from './topBar';
import NameBox from './../welcome/nameBox';
import Button from './../util/button';

import './../util/title.css';
import './../util/body.css';
import './home.css';

const prideColors = [ {backgroundColor: "rgba(234, 62, 55, 0.9)"},
                      {backgroundColor: "rgba(246, 143, 31, 0.9)"},
                      {backgroundColor: "rgba(246, 213, 9, 0.9)"},
                      {backgroundColor: "rgba(168, 203, 56, 0.9)"},
                      {backgroundColor: "rgba(32, 154, 207, 0.9)"},
                      {backgroundColor: "rgba(170, 82, 160, 0.9)"},
                     ];

const interval = clearInterval();

//The entire application will live inside of the home component!
class Home extends React.Component {
  constructor(props) {
    super(props);

    document.body.style.overflow = "hidden";
    this.state = {colorIndex: 0, currentColor: {}, updateColor: true, topBarText: "", hasRenderedTopBar: false};
    this.updateColor = this.updateColor.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setUpdateColorTrue = this.setUpdateColorTrue.bind(this);
    this.setUpdateColorFalse = this.setUpdateColorFalse.bind(this);
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
        this.setState({topBarText: "CREMIS"});
        this.setState({hasRenderedTopBar: true});
      }
    } else {
      this.setState({updateColor: true});
      this.setState({topBarText: ""});
      this.setState({hasRenderedTopBar: false});

    }
  }

  updateColor() {
    this.setState({currentColor: prideColors[this.state.colorIndex]});
  }

  setUpdateColorTrue() {
    this.setState({updateColor: true})
  }

  setUpdateColorFalse() {
  this.setState({updateColor: false})
  }

  render() {
    return(
      <body id="topOfBody">
        <div onMouseOver={this.setUpdateColorTrue} onMouseLeave={this.setUpdateColorFalse} onClick={scroll.scrollToTop}>
        <TopBar currentColor={this.state.currentColor} text={this.state.topBarText}/>
        </div>
        <div>

        <NameBox currentColor={this.state.currentColor}/>
        <div class="welcome">
        Welcome to my personal page. Let's see what we can achieve together!
        <VSpace padding={200}/>
        </div>
        <div>
        <Link activeClass="active"
          className="test1"
          to="navigation"
          spy={false}
          smooth={true}
          duration={800}
          offset={-75}
        >
        <Button text="ENTER"/>
        </Link>
        </div>


          <div class="title">
          <VSpace padding={400} />
          <Element name="navigation" className="element">
          Navigation
          </Element>
          </div>
          <div>
            <VSpace padding={30} />
          </div>
          <div class="body">
            I'm happy you are taking your time exploring my webiste!
            If you are on mobile, well I guess it sucks to suck...
            If you are not on mobile, put your cursor over the tab in the upper left hand corner.
            See how it is shifting colors! Wow, AMAZING right! Now press it, I'll wait... Wow wasn't that smooth, smooth scrolling amazing?
            I think so too! Did you also notice that the tag now is the color of the titlebox when you pressed enter.
            That feature took me like 30 hours to code so you better appreciate it!

            Anyways, nice seeing you. This is a work in progress so don't expect too much...

            Seeya!
            /Gabriel
          </div>
          </div>

          <div>
            <VSpace padding={5000} />
          </div>

      </body>
    );
  }

}

export default Home;
