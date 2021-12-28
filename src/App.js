import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./components/ListItem";
import { useState } from "react";
import Alert from "./components/Alert";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [storeValue, setStoreValue] = useState([]);
  const [alert, setAlert] = useState("d-none");
  const getValue = (e) => {
    setinputValue(e.target.value);
  };
  const addValue = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      // console.log("faka");
      setAlert("d-block");
     
      // alert(" Fill Out This Field");
    } else {
      setAlert("d-none");
      setStoreValue([...storeValue, inputValue]);
      console.log("value from Input Value", inputValue);
      console.log("value from Store Value", storeValue);
    }
  };

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
                  className="form-control w-75 text-center"
                  id="exampleFormControlInput1"
                  placeholder="Add Task Here"
                  required
                  onChange={getValue}
                />

                <input
                  type="submit"
                  value="Add"
                  className="btn  text-white addBtn ml-2"
                  onClick={addValue}
                />
              </form>
              <Alert typeAlert={alert} />
              <div className=" mt-3 TaskName">
                <ul className="taskGroup ">
                  <div className="taskList">
                    {storeValue.map((s) => {
                      return <ListItem userValue={s} />;
                    })}
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
