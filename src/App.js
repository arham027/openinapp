import "./App.css";
import Login from "./components/Login";
import Upload from "./components/Upload";
import Uploaded from "./components/Uploaded";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/uploaded" element={<Uploaded/>} />
    </Routes> 
    </div>
  );
}

export default App;

