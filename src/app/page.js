"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Textform from "../components/Textform";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar/>
      <div className="container pt-0">
        <Textform />
      </div>
      <Footer />
    </>
  );
}

export default Home;