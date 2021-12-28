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
          <h3 className="text-center mb-2">My NotePad</h3>
          <div className="row d-flex  justify-content-center">
            <div className=" col-sm-12 col-md-6 col-lg-6 rightBar d-none d-md-block d-lg-block">
              <lottie-player
                className=""
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/private_files/lf30_fvqxryww.json"
              ></lottie-player>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 leftBar  ">
              <div className="contentWrapper d-flex align-items-center justify-content-center">
                <input
                  type="email"
                  className="form-control w-50"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <button className="btn btn-success ml-2">Add Task</button>
              </div>
              <div className="ml-5">
                <ul>
                  <li>Heloo thus </li>
                  <li>Heloo</li>
                  <li>Heloo</li>
                  <li>Heloo</li>
                  <li>Heloo</li>
                  <li>Heloo</li>
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
