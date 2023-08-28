import React, { Component } from "react";

export default class Chil_Class_Comp extends Component {
  // hàm handle click
  handleClick = () => {
    this.props.handleChangeName("T.T");
  };
  render() {
    return (
      <>
        <div>UserName ở Chil_Class_Comp: {this.props.userName}</div>;
        <button onClick={this.handleClick}>Change Props</button>
      </>
    );
  }
}
