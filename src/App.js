import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/js/Home";
import Pickup from "./pages/js/Pickup";
import Track from "./pages/js/Track";
import Register from "./pages/js/Register";
import Adminlogin from "./pages/js/Adminlogin";
import Aboutus from "./pages/js/Aboutus";
import Regdb from "./pages/js/Regdb";
import Dbmenu from "./pages/js/Dbmenu";
import Eddb from "./pages/js/Eddb";
import Updb from "./pages/js/Updb";
import Pickdb from "./pages/js/Pickdb";
import User from "./pages/js/User";
import Cp1 from "./pages/js/Cp1";
import Cp2 from "./pages/js/Cp2";

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
      <Route path="/Eddb" element={<Eddb />} />
      <Route path="/Updb" element={<Updb />} />
      <Route path="/Pickdb" element={<Pickdb/>} />
      <Route path="/User" element={<User/>} />
      <Route path="/Cp1" element={<Cp1/>} />
      <Route path="/Cp2" element={<Cp2/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
