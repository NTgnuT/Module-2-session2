import React, { Component } from "react";

export default class FormAddStudent extends Component {
  //khởi tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      userCode: "",
      userName: "",
      dateOfBirth: "",
      address: "",
      email: "",
      password: "",
    };
  }

  // Hàm lắng nghe sự thay đổi của các ô input
  handleChangeInput = () => {
    this.setState({});
  };

  //đóng form
  handleCloseForm = () => {
    this.props.handleClose(false);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm mới sinh viên
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.handleCloseForm}
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label htmlFor="studentCode" className="form-label">
                      Mã sinh viên
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="studentCode"
                      value={this.userCode}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="studentName" className="form-label">
                      Tên sinh viên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                      value={this.userName}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      value={this.dateOfBirth}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={this.address}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={this.email}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={this.password}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={this.handleCloseForm}
                      onChange={(e) => this.handleChangeInput(e)}
                    >
                      Hủy
                    </button>
                    <button type="button" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
