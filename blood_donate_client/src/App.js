import './App.css';
import React, { useState, useEffect } from 'react';
import data from './data.json';
//import Nav from './components/Nav';
import BloodForm from './components/BloodForm';
import DonorForm from './components/DonorForm';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [state, setstate] = useState("");
  const [districts, setdistricts] = useState("");
  const [donorsList, setDonorsList] = useState([]);
  const [showlist, setshowlist] = useState(false);
  const [donorsubmission, setdonorsubmission] = useState(false)

  const addDonor=(e)=>{
    e.preventDefault();
    setdonorsubmission(true);
    Axios.post("http://localhost:3001/create",{
      name:name,
      age:age,
      bloodGroup:bloodGroup,
      phoneNo:phoneNo,
      state:state,
      districts:districts
    }).then(()=>{
      console.log("successful");
    })
  }

  const getDonors = (e) => {
    setshowlist(true);
    e.preventDefault();
      Axios.get("http://localhost:3001/donors",{
       params:{ bloodGroup:bloodGroup,
        state:state,
        districts:districts
      }
      }).then((response) => {
        setDonorsList(response.data);
      })
      .then(()=>{
      console.log(donorsList);
      });
      // console.log("button pressed");
    };

  return (
        <Router>
            <div className="App">
            <nav>
              <div>
              <Link to="/">Home</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/look4blood">Look For Blood</Link>
              <Link to="/about">About</Link>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home/>}>
              </Route>
              <Route path="/donate" element={<DonorForm 
              state={state} 
              setName={setName}
              setAge={setAge}
              setBloodGroup={setBloodGroup}
              setPhoneNo={setPhoneNo}
              setstate={setstate} 
              setdistricts={setdistricts} 
              data={data} 
              addDonor={addDonor}
              donorsubmission={donorsubmission}
              />}></Route>

              <Route path="/look4blood" 
              element={<BloodForm 
              state={state} 
              bloodGroup={bloodGroup}
              districts={districts}
              setBloodGroup={setBloodGroup}
              setstate={setstate} 
              setdistricts={setdistricts} 
              data={data} 
              donorsList={donorsList}
              getDonors={getDonors}
              showlist={showlist}
              setshowlist={setshowlist}
              />}></Route>
              <Route path="/about" element={<About/>}></Route>
            </Routes>
        </div>
        </Router>
        

    
  );
}

export default App;
