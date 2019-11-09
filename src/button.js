import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {id: ''}
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //This is how i get the data on index 0 of the JSSON object sent by the api!
  handleClick(event) {
    //this.setState(id: event.target.id)
    fetch('http://localhost:4000/note/' + this.state.id)
    .then(res => res.json())
    .then(data => console.log(data[0]));

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({id: event.target.id});
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <label>
        Get message by ID:
        <input type="text" value="id" onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <input type="submit" defaultValue="id" onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Button</button>
      </form>
    );
  }
}

export default Toggle;
