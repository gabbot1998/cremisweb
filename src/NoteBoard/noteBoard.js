import React from 'react';
import MessageItem from './messageItem';
import './noteBoard.css';


class NoteBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {array: new Array()};
    this.updateNoteBoard = this.updateNoteBoard.bind(this);
  }

  updateNoteBoard(newState) {
    this.setState({array: newState});
  }

  componentDidMount() {
    this.fetchAllMessages();
  }

  fetchAllMessages() {
    fetch('http://localhost:4000/note/all', {
      method: 'GET',
      //headers: {
        //'Accept': 'application/json',
        //'Content-Type': 'application/json'
      //},
      //body: data
    })
    .then(res => res.json())
    .then(data => this.displayAllMessages(data));
  }

  displayAllMessages(data) {
    console.log(data.length);
    let array = new Array();

    for(let i = 0; i < data.length; i = (i + 2)) {
      array.push(
        <MessageItem name={data[i]} message={data[i + 1]}/>
      );
    }


    this.updateNoteBoard(array);
    console.log(Array.isArray(this.state.array));
    //return(<div>{array}</div>);
  }

  render() {
    return (
      <div class="noteBoard">{this.state.array}</div>
    );
  }


}

export default NoteBoard
