import React from 'react';
import TestApp from './../TestApp'

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signature: 'Gabriel', message: 'Borglund'};

    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.postToApi = this.postToApi.bind(this);
    this.render = this.render.bind(this);
  }

  changeMessage(event) {
    this.setState({message: event.target.value});
  }

  changeName(event) {

    this.setState({signature: event.target.value});
    console.log(this.state.signature);
  }

  postToApi() {
    var ending = '"}';
    var messageString = '","message":"';
    var nameString = '{"name":"';
    console.log();

    var data = nameString + this.state.signature + messageString + this.state.message + ending;

    fetch('http://localhost:4000/note/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
  }

  handleSubmit(event) {
    this.postToApi();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name :
        <input type="text" defaultValue={this.state.signature || "name"} onChange={this.changeName} />
      </label>
      <label>
        message :
        <input type="text" defaultValue={this.state.message} onChange={this.changeMessage} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NoteForm;
