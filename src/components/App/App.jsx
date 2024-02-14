import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Profile, Settings, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/settings" element={<Settings />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
