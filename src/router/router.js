import React from "react"; //6.9k (gzipped:2.7k)
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to='/Home'/ >} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/tours" element={<Tour/>}/>
            <Route path="/tours/:id" element={<TourDetails/>}/>
            <Route path="/tours/search" element={<SearchResultList/>}/>
        </Routes>
    )
};

export default Routers;