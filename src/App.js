import React from "react";

import Toolbar from "./Toolbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <h1>Hello React</h1>
          <p>This is the Test.</p>
        </Toolbar>
      </div>
    );
  }
}

export default App;
