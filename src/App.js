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

class AddForm extends React.Component {
  nameRef = React.createRef();
  ageRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let age = this.ageRef.current.value;
    this.props.add(name, age);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} />
        <br />
        <input type="text" ref={this.ageRef} />
        <br />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    personData: [{ id: 1, name: "eg.(customer 1)", age: "eg.(18)" }],
  };

  add = (name, age) => {
    let id = this.state.personData.length + 1;

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
        <AddForm add={this.add} />
      </div>
    );
  }
}

export default App;
