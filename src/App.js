import {
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import Login from "./pages/authPage/login";
import Dashboard from "./pages/dashboard";
import BaseLineCalculation from "./pages/dashboard/baseLineCalculation";
import  "./App.css"
import {getToken} from "utils/getAndSetToken"
import {useState,useEffect} from "react"
function App() {
  const[isLoggin,setIsLoggin] = useState(false);
  let location = useLocation();
  useEffect(()=>{
    if(getToken())
      setIsLoggin(true)
    else
      setIsLoggin(false) 
  },[location])
  return (
    <Routes>
      {
        isLoggin ? (
        <>
          <Route path="/" element={<Dashboard />}  />
          <Route path="/dashboard" element={<Dashboard />}  />
          <Route path="/calculate-baseLine" element={<BaseLineCalculation />}  />
          <Route path="*" element={<NoMatch />} />
        </>
      ):(
        <>
          <Route path="/" element={<Login />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="*" element={<NoMatch />} />
        </>
      )
    }
    </Routes>
  );
}

export default App;
function NoMatch() {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center'}} >
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">رفتن به داشبورد</Link>
      </p>
    </div>
  );
}
