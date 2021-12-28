import React from "react";

export default function Alert(props) {
  return (
    <div>
      <div class={`alert alert-danger mt-3 ${props.typeAlert}`} role="alert">
        Please Fill Out The Input Filed First
      </div>
    </div>
  );
}
