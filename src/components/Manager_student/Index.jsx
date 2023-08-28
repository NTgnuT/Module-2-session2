import React, { Component } from "react";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Table from "./Table";
import Modal from "./Modal";
// import FormAddStudent from "./FormAddStudent";
import FormEditStudent from "./FormEditStudent";

export default class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Toolbar />
        <Table />
        {/* <Modal /> */}
        {/* <FormAddStudent /> */}
        {/* <FormEditStudent /> */}
      </>
    );
  }
}
