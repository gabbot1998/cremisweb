import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);

    //the button needs to have a text and a function from the beginning. These will be sent with props.
    this.state = {text: props.text};
  }

  render() {
    return(
      <div class="welcomeButton" style={{overflow: "hidden"}}>{this.props.text}</div>
    );
  }

}

export default Button;
