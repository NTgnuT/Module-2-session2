import React, { Component } from "react";

export default class MessDelete extends Component {
  render() {
    return (
      <>
        <div
          className="toast align-items-center text-white bg-primary border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">Xóa thành công</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
      </>
    );
  }
}
