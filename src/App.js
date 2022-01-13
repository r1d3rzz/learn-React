import React from "react";

const Items = ({ name, price }) => (
  <li>
    {name} = $ {price}
  </li>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <Items name="Orange" price="20" />
        </ul>
      </div>
    );
  }
}

export default App;
