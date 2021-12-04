import {
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import Login from "./pages/authPage/login";
import Dashboard from "./pages/dashboard";
import BaseLineCalculation from "./pages/dashboard/baseLineCalculation";
import ExpenseRate from "./pages/dashboard/expenseRate";
import Bill from "./pages/dashboard/bill";
import Annoucement from "./pages/dashboard/announcements";
import Claims from "./pages/dashboard/claims";
import Setting from "./pages/dashboard/settings";
import RawData from "./pages/dashboard/rawData";
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
          <Route path="/expenseRate" element={<ExpenseRate />}  />
          <Route path="/bill" element={<Bill />}  />
          <Route path="/announcements" element={<Annoucement />}  />
          <Route path="/objections" element={<Claims />}  />
          <Route path="/raw-data" element={<RawData />}  />
          <Route path="/settings" element={<Setting />}  />
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
