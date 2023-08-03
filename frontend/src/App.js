import './App.css';
import Home from './pages/Home';
import Signup from './components/Signup/Signup';
import Createpage from './pages/Createpage';
import { Route,Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import { useState } from 'react';
import Authcontext from './context/Logincontext';
import Dashboardpage from './pages/Dashboardpage';
import jwt_decode from "jwt-decode";
import axios from "axios"
function App() {
  
  const [accessToken, setAccessToken] = useState(localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "");
  const [userDecode,setUserDecode]=useState(localStorage.getItem("authToken") ? jwt_decode(localStorage.getItem("authToken")) : "")
  

  
  
  
  return (
    <div className="App">
      
      <Authcontext.Provider value={{accessToken,setAccessToken,userDecode,setUserDecode}}>
      <Routes>

        
        <Route path="/" exact element={<Home/>}/>
        <Route path="/signuppage" element={<Createpage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
       
    

      </Routes>
      </Authcontext.Provider>
     
  

      
    </div>
  );
  
}



  

export default App;
