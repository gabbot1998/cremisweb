import React from 'react';
import './messageItem.css'

class MessageItem extends React.Component {
  //The constructor takes a message and a name. For example this.props.name
  // or this.props.message
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class="quote">
        <div class="message">"{this.props.message}"</div>
        <div class="name">-{this.props.name}</div>
      </div>
    );
  }
}

export default MessageItem;
