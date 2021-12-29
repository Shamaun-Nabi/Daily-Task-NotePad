import React from "react";

export default function ListItem(props) {
  return (
    <>
      <li className=" w-75 m-2 p-1 text-dark d-flex justify-content-between  align-items-center">
        <div className="taskWithIcon d-flex justify-content-center  align-items-center">
          <span className="material-icons penIcon rotate-90-cw ">verified</span>
          <span className="ml-3">{props.userValue}</span>
        </div>
        <button className="" onClick={props.itemDlt}>
          <span className="material-icons dltIcon">delete</span>
        </button>
      </li>
    </>
  );
}
