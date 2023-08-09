import './App.css';
import Home from './pages/Home';
import Signup from './components/Signup/Signup';
import Createpage from './pages/Createpage';
import { Route,Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Adminloginpage from './pages/Adminloginpage';
import { useState } from 'react';
import Authcontext from './context/Logincontext';
import Dashboardpage from './pages/Dashboardpage';
import jwt_decode from "jwt-decode";
import axios from "axios"
import Adminhomepage from './pages/Adminhomepage';
import Dashnext from './components/Dashboard/Dashnext';
function App() {
  
  const [accessToken, setAccessToken] = useState(localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "");
  const [userDecode,setUserDecode]=useState(localStorage.getItem("authToken") ? jwt_decode(localStorage.getItem("authToken")) : "")
  
  

  
  
  
  return (
    <div className="App">
      
      <Authcontext.Provider value={{accessToken,setAccessToken,userDecode,setUserDecode}}>
      <Routes>

        
        <Route path="/" exact element={<Home/>}/>
        
        {!(accessToken) && <Route path="/signuppage" element={<Createpage />} /> }
        {!(accessToken) && <Route path="/loginpage" element={<Loginpage />} /> }
        
        {accessToken && <Route path="/dashboard" element={<Dashboardpage />} />}

        <Route path="/adminlogin" element={<Adminloginpage />} />
        <Route path="/adminhome" element={<Adminhomepage />} />
        <Route path="/dashnext" element={<Dashnext />} />
       
    

      </Routes>
      </Authcontext.Provider>
     
  

      
    </div>
  );
  
}



  

export default App;
