import React from "react";

export default function ListItem() {
  return (
    <>
      <li className=" w-75 m-2 p-1 text-dark d-flex justify-content-between  align-items-center">
        <div className="taskWithIcon d-flex justify-content-center  align-items-center">
          <span className="material-icons penIcon rotate-90-cw ">verified</span>
          <span className="ml-3">Hello task</span>
        </div>
        <button className="">
          <span class="material-icons dltIcon">delete</span>
        </button>
      </li>
    </>
  );
}
