import React, { Component } from "react";
import Chil_Class_Comp from "./Chil_Class_Comp";

export default class Class_Comp extends Component {
  // Khai báo constructor => Hàm khởi tạo, hay là bản thiết kế của 1 đối tượng
  constructor(props) {
    super(props); //super được sử dụng để kế thừa lại tất cả phương thức và thuộc tính của lớp cha
    // Khai báo state
    this.state = {
      //danh sách các State muốn khai báo
      company: "Rikkei Academy",
      status: false,
      userName: "Rumz",
    };
  }

  //hàm handleClick
  handleClick = () => {
    //cập nhật lại state
    this.setState({
      company: "Rikkei Soft",
    });
  };

  //hàm xử lý trạng thái button
  handleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  // hàm cập nhật lại state userName
  handleChangeName = (name) => {
    console.log("Đã nhận", name);
    // cập nhật lại state
    this.setState({
      userName: name,
    });
  };

  render() {
    return (
      <>
        <div>Tên công ty: {this.state.company}</div>
        <button onClick={this.handleClick}>Change State</button>
        <button onClick={this.handleStatus}>
          {this.state.status ? "Hiện" : "Ẩn"}
        </button>

        {/* Gọi đến component con */}
        <h1>UserName bên trong Class_Comp: {this.state.userName}</h1>
        <Chil_Class_Comp
          userName={this.state.userName}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}

// có 1 nút có title là show, khi click vào thì hiển thị là ẩn,
// khi click vào lần nữa thì hiển thị là hiện
// tạo ra 1 state title có giá trị là hiện
// viết 1 hàm để set lại state
