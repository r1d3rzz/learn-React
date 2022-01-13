import React from "react";

const styles = {
  toolBar: {
    backgroundColor: "cyan",
    padding: 20,
  },
  borderStyle: {
    border: "5px solid blue",
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
};

class Toolbar extends React.Component {
  render() {
    return (
      <div style={(styles.toolBar, styles.borderStyle)}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
