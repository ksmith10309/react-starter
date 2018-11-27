import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Main'
    };
  }
  render() {
    return (
      <main>
        <h1>Hello World From {this.state.location}</h1>
      </main>
    );
  }
}

export default Main;
