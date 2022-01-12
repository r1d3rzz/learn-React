import React from "react";

class Toolbar extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "cyan", padding: 10 }}>
        {this.props.children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Toolbar>
        <h1>Hello React</h1>
        <p>This is the sample Text.</p>
      </Toolbar>
    );
  }
}

export default App;

{
  /* 
  Example Code

  <Toolbar>
  <Logo image="/path/to/image" />
  <Title>
    <Heading>App Title</Heading>
    <SubHeading>App Tag Line</SubHeading>
  </Title>
  <Menu>
    <MenuItem value="Home" />
    <MenuItem value="Users" />
  </Menu>
</Toolbar>; */
}
