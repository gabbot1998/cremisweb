import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import VSpace from './../util/vSpace';
import TopBar from './topBar';
import NameBox from './../welcome/nameBox';
import Button from './../util/button';

import './../util/title.css';
import './../util/body.css';

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
    this.state = {
      colorIndex: 0,
      currentColor: {},
      updateColor: true,
      topBarText: "",
      menuItems: [],
      hasRenderedTopBar: false,
      currentPage: <div>This is the current page</div>
    };
    this.updateColor = this.updateColor.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.mouseOverTopBar = this.mouseOverTopBar.bind(this);
    this.mouseNotOnTopBar = this.mouseNotOnTopBar.bind(this);
    this.switchScreen = this.switchScreen.bind(this);
    this.sleep = this.sleep.bind(this);
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
      this.setState({menuItems: []});
      this.setState({hasRenderedTopBar: false});

    }
  }

  updateColor() {
    this.setState({currentColor: prideColors[this.state.colorIndex]});
  }

  mouseOverTopBar() {
    this.setState({updateColor: true});
    this.setState({menuItems: ["HOME", "PROJECTS", "ABOUT"]});
  }

  mouseNotOnTopBar() {
  this.setState({updateColor: false});
  this.setState({menuItems: []});

  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  renderNewScreen(newScreen) {
    switch (newScreen) {
      case "about":
        this.setState({currentPage:
          <div>
          I have successfully switched to the about page. My name is Gabriel what is yours?
          </div>
        })
        break;
      case "projects":
      this.setState({currentPage:
        <div>
        Now I am actually at the freaking projects page, but low and behold I have no Projects...
        </div>
      })
      default:

    }
  }

  async switchScreen(newScreen) {
    scroll.scrollToBottom();
    await this.sleep(600)
    console.log(newScreen);
    this.renderNewScreen(newScreen)
    scroll.scrollTo(850);

  }


  render() {
    return(
      <body id="topOfBody">


        <div onMouseOver={this.mouseOverTopBar} onMouseLeave={this.mouseNotOnTopBar} >
        <TopBar currentColor={this.state.currentColor} text={this.state.topBarText} onClick={scroll.scrollToTop}/>
        <div class="menuItem" style={{left: "70px"}} onClick={scroll.scrollToTop}>{this.state.menuItems[0]}</div>
        <div class="menuItem" style={{left: "150px"}} newScreen={"projects"} onClick={() => this.switchScreen("projects")} >{this.state.menuItems[1]}</div>
        <div class="menuItem" style={{left: "230px"}} newScreen={"about"} onClick={() => this.switchScreen("about")}>{this.state.menuItems[2]}</div>
        </div>






        <div>
        <NameBox currentColor={this.state.currentColor}/>
        <div class="title">
        Welcome to my personal page. Let's see what we can achieve together!
        <VSpace padding={200}/>
        </div>
        <div>
        <div class="buttonField">
        <Link activeClass="active"
          className="test1"
          to="view"
          spy={false}
          smooth={true}
          duration={800}
          offset={-75}
        >
        <Button text="ENTER"/>
        </Link>
        </div>
        </div>


          <div class="title">
          <VSpace padding={400} />
          <Element name="view" className="element">
          Navigation
          </Element>
          </div>
          <div>
            <VSpace padding={30} />
          </div>
          <div class="body">
            {this.state.currentPage}
          </div>
          </div>
          <div>
          <VSpace padding={1500} />
          </div>

      </body>
    );
  }

}

export default Home;
