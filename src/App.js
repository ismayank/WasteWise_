import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pickup from "./pages/Pickup";
import Track from "./pages/Track";
import Register from "./pages/Register";
import Adminlogin from "./pages/Adminlogin";
import Aboutus from "./pages/Aboutus";
import Regdb from "./pages/Regdb";
import Dbmenu from "./pages/Dbmenu";


function App() {
return(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pickup" element={<Pickup />} />
      <Route path="/Track" element={<Track />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Adminlogin" element={<Adminlogin />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Regdb" element={<Regdb />} />
      <Route path="/Dbmenu" element={<Dbmenu />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
