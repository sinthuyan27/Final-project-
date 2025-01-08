import React from "react"; //6.9k (gzipped:2.7k)
import Header from "../header/header";  
import Routers from "../router/router";
import Footer from "../footer/footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routers/>
            <Footer/>
        </>
    )
};

export default Layout;