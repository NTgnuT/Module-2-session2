import React from "react";

export default function Children_Comp(props) {
  console.log("Tham số của children:", props.userName, props.age);
  return <div>User name của children là: {props.userName}</div>;
}
