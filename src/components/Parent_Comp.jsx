import React from "react";
import Children_Comp from "./Children_Comp";

export default function Parent_Comp() {
  const userName = "Nguyễn Văn A";
  const age = 22;
  return (
    <div>
      <h1>User của ParentComponent là: {userName}</h1>
      <Children_Comp userName={userName} age={age} />
    </div>
  );
}
