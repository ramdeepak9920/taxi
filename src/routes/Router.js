import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React from 'react';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import Navbar from '../components/Navbar';


function Router(){

    let token="";

   return(
    <React.Fragment>
        <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route exact path='/' element={token? (<Navigate to="/home"/>): <SignIn/>}/>
            <Route exact path="/home" element={<Home/>}/>
         </Routes>
        </BrowserRouter>
    </React.Fragment>
   )


}

export default Router;