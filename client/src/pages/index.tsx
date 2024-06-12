import React from "react"; 

// components of web page
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Intro from "@/component/intro";
import Blog from "@/component/blog";

function Homepage() {
    return (
        <>
        <Navbar />
        <Intro />
        <Blog />
        <Footer />
        </>
    )
}
export default Homepage;
