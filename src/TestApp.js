import React, { Component } from 'react';
import Toggle from './button';
import NoteForm from './NoteBoard/guestSignatureForm'
import NoteBoard from './NoteBoard/noteBoard.js'


const API = 'https://localhost:4000/note/'
const ID = '2'

class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {noteBoard: new NoteBoard()};

    this.updateNoteBoard = this.updateNoteBoard.bind(this);
  }

  updateNoteBoard(newNoteBoard) {
    this.setState(newNoteBoard);
  }


  render() {
    return (
      <body>
        <h1>Welcome</h1>
          <div>
            <NoteForm />
          </div>
          <div>
            <NoteBoard />
          </div>
      </body>
    );
  }
}

export default TestApp;
