import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Sidebar from "./components/Sidebar";
import Transaction from './pages/Transaction'
import Card from './pages/Card'
import Login from './pages/login';
import Setting from './pages/Setting';


const App = () => {
  const [auth, setAuth] = useState(null);



  useEffect(() => {
    let u = localStorage.getItem("user");
    u && JSON.parse(u) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
   <Router>
   
<Sidebar/>

    <Routes>
      {!auth && (
        <Route
          path="/auth"
          element={<Auth authenticate={() => setAuth(true)} />}
        />
      )}

      {auth && (

        <>
          <Route
            path="/profile"
            element={<Sidebar logout={ () => setAuth(false)} />}
          />
          
          <Route  path="/setting " element={<Setting />} />
          <Route path="/transaction" element={<Transaction/>}/>
          <Route  path='/card' element={<Card/>} />
          <Route path='/login' element={<Login/>} />
   
          
        </>
      )}
      <Route path="*" element={<Navigate to={!auth ? "/auth": "/profile"} />} />


    </Routes>
    </Router>
   
  );
};

export default App;
