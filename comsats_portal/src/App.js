import Dashboard from "./Components/Dashboard";
import {  BrowserRouter as Router ,Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Dashboard}></Route>
      </Routes>
    </Router>
  );
}

export default App;
