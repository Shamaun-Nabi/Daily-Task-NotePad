import React from "react";

export default function Alert(props) {
  return (
    <div>
      <div className={`alert alert-danger mt-3 ${props.typeAlert}`} role="alert">
        আগে লিখুন এরপর যোগ করুন
      </div>
    </div>
  );
}
