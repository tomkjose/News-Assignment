import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Profile, Settings, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";
import { useTheme } from "../../Providers/ThemeProvider";
import "./App.css";
function App() {
  const { currentTheme } = useTheme();
  return (
    <div className={`App ${currentTheme ? "Dark" : "Light"}`}>
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
