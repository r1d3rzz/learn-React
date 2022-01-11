import React from "react";

class Item extends React.Component {
  render() {
    return (
      <p>
        My name is {this.props.name} is {this.props.age} years old.
      </p>
    );
  }
}

class App extends React.Component {
  state = {
    personData: [{ id: 1, name: "eg.(customer 1)", age: "eg.(18)" }],
  };

  nameRef = React.createRef();
  ageRef = React.createRef();

  add = () => {
    let id = this.state.personData.length + 1;
    let name = this.nameRef.current.value;
    let age = this.ageRef.current.value;

    this.setState({
      personData: [...this.state.personData, { id, name, age }],
    });
  };

  render() {
    return (
      <div>
        <h1>User Data</h1>
        {this.state.personData.map((p) => {
          return <Item key={p.id} name={p.name} age={p.age}></Item>;
        })}
        <input
          type="text"
          ref={this.nameRef}
          placeholder="Enter Your Name"
          autoFocus
        />
        <br />
        <br />
        <input
          type="text"
          ref={this.ageRef}
          placeholder="Enter Your Age"
          required
        />
        <br />
        <br />
        <button onClick={this.add}>Add New</button>
      </div>
    );
  }
}

export default App;
