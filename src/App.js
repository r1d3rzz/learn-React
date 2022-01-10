import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} = ${this.props.price}
      </li>
    );
  }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Orange", price: 21 },
      { id: 2, name: "Apple", price: 25 },
    ],
  };

  add = () => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [...this.state.items, { id, name: `Item ${id}`, price: id * 0.5 }],
    });
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {this.state.items.map((i) => {
            return <Item name={i.name} price={i.price}></Item>;
          })}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
