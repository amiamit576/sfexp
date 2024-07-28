
import './App.css';
import ForntPage from './components/ForntPage';
import Signup from "./userAuth/Signup";
import SignIn from "./userAuth/SignIn";
import ResetPsw from "./userAuth/ResetPsw";
import { Routes,Route } from 'react-router-dom';
import Dashbord from './dashboard/Dashbord';



function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<ForntPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/resetpsw" element={<ResetPsw />} />
    </Routes>
    <Routes>
    <Route path="/dashboard" element={<Dashbord />} />
    </Routes>
  
      
     
       

        

        
      
    </div>
  );
}

export default App;