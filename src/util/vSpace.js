import React from 'react'

class VSpace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {padding: props.padding};
  }

  componentDidMount() {
    console.log(this.state.padding);
  }

  render() {

    return(
      <div style={{marginTop: this.state.padding}}></div>
    );
  }

}

export default VSpace;
