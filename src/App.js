import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./components/ListItem";
import { useState } from "react";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [inputValue, setinputValue] = useState("");
  return (
    // Remove this area and start your code
    <div className="container d-flex align-items-center justify-content-center">
      <div className="mainWrapper d-flex align-items-center justify-content-center">
        <div className="displayWrapper">
          <h4 className="text-center mb-2 tracking-in-expand">My NotePad</h4>
          <h6 className="text-center text-muted">
            Developed & Designed By Shamaun Nabi
          </h6>
          <div className="row d-flex  justify-content-center mt-3">
            <div className=" col-sm-12 col-md-6 col-lg-6 leftBar d-none d-md-block d-lg-block">
              <lottie-player
                className="sideLogo"
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/private_files/lf30_fvqxryww.json"
              ></lottie-player>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 rightBar  ">
              <form className="contentWrapper d-flex align-items-center justify-content-center">
                <input
                  type="email"
                  className="form-control w-75 text-center"
                  id="exampleFormControlInput1"
                  placeholder="Add Task Here"
                  required
                />
                <input
                  type="submit"
                  value="Add"
                  className="btn  text-white addBtn ml-2"
                />
                {/* <span className="material-icons addIcon">add_box</span> */}
                {/* <span class="material-icons-two-tone">clear</span> */}
              </form>
              <div className=" mt-3 TaskName">
                <ul className="taskGroup ">
                  <div className="taskList">
                    <ListItem />
                    <ListItem />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Remove this area and start your code
  );
}

export default App;
