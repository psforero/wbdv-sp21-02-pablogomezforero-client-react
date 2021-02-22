import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";

const App = () =>
  <BrowserRouter>
    <div className="App">
      <CourseManager/>
    </div>
  </BrowserRouter>


export default App;
