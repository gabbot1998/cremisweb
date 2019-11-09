import React from 'react'
import './welcomeButton.css'

class Button extends React.Component {
  constructor(props) {
    super(props);

    //the button needs to have a text and a function from the beginning. These will be sent with props.
    this.state = {text: props.text};

    this.executeFunction = this.executeFunction.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = document.getElementById("scroll-container").style.overflow;
  }
  executeFunction() {
    var container = document.getElementById("scroll-container");
    document.getElementById("hb").scrollIntoView();
    document.body.style.overflow = "hidden";
    console.log(container);
  }

  render() {
    return(
      <div class="welcomeButton" onClick={this.executeFunction}> {this.state.text}</div>
    );
  }

}

export default Button;
