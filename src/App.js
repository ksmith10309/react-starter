import React, { Component } from 'react';

import './design/design.scss';

import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
