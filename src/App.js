import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Info from "./Info";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recepie" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
