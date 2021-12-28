import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    // Remove this area and start your code
    <div className="container d-flex align-items-center justify-content-center">
      <div className="mainWrapper d-flex align-items-center justify-content-center">
        <div className="displayWrapper">
          <h3 className="text-center mb-2 tracking-in-expand">My NotePad</h3>
          <div className="row d-flex  justify-content-center">
            <div className=" col-sm-12 col-md-6 col-lg-6 leftBar d-none d-md-block d-lg-block">
              <lottie-player
                className=""
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/private_files/lf30_fvqxryww.json"
              ></lottie-player>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 rightBar  ">
              <div className="contentWrapper d-flex align-items-center justify-content-center">
                <input
                  type="email"
                  className="form-control w-75 text-center"
                  id="exampleFormControlInput1"
                  placeholder="Add Task Here"
                />
                <button className="btn  addBtn ml-2">
                  <span className="material-icons addIcon">add_box</span>
                  {/* <span class="material-icons-two-tone">clear</span> */}
                </button>
              </div>
              <div className=" mt-3 TaskName">
                <ul className="taskGroup ">
                  <div className="taskList">
                    <li className=" w-75 m-2 p-1 text-dark d-flex justify-content-between  align-items-center">
                      <div className="taskWithIcon d-flex justify-content-center  align-items-center">
                        <span className="material-icons penIcon rotate-90-cw ">verified</span>
                        <span className="ml-3">Hello task</span>
                      </div>

                      <button className="">
                      
                        <span class="material-icons dltIcon">delete</span>
                      </button>
                    </li>
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
