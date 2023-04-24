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
import Cp1 from "./pages/js/Cp1";
import Cp2 from "./pages/js/Cp2";
import Dash from "./pages/js/Dash";
import Login from "./pages/js/Login";
import Cate from "./pages/js/Cate";
import Dom from "./pages/js/Categories/Dom";
import Agri from "./pages/js/Categories/Agri";
import Health from "./pages/js/Categories/Health";
import Ind from "./pages/js/Categories/Ind";
import Comm from "./pages/js/Categories/Comm";
import Pay from "./pages/js/Pay";
import Footer from "./pages/js/Footer";
import Order from "./pages/js/Order";
import Domshow from "./pages/js/Domshow";
import Indshow from "./pages/js/Indshow";
import Agrishow from "./pages/js/Agrishow";
import Commshow from "./pages/js/Commshow";
import Healthshow from "./pages/js/Healthshow";
import Userin from "./pages/js/Userin";


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
      <Route path="/Login" element={<Login/>} />
      <Route path="/Cp1" element={<Cp1/>} />
      <Route path="/Cp2" element={<Cp2/>} />
      <Route path="/Dash" element={<Dash/>} />
      <Route path="/Cate" element={<Cate/>} />
      <Route path="/Dom" element={<Dom/>} />
      <Route path="/Agri" element={<Agri />} />
      <Route path="/Health" element={<Health/>} />
      <Route path="/Ind" element={<Ind />} />
      <Route path="/Comm" element={<Comm/>} />
      <Route path="/Pay" element={<Pay/>} />
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/Domshow" element={<Domshow/>}/>
      <Route path="/Indshow" element={<Indshow/>}/>
      <Route path="/Agrishow" element={<Agrishow/>}/>
      <Route path="/Commshow" element={<Commshow/>}/>
      <Route path="/Healthshow" element={<Healthshow/>}/>
      <Route path="/Userin" element={<Userin/>}/>

      
      


      </Routes>
      </BrowserRouter>

  );
}

export default App;
