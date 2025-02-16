"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Textform from "../components/Textform";
import { useState } from "react";
import Footer from "../components/Footer";

function Home() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container pt-0">
        <Textform />
      </div>
      <Footer />
    </>
  );
}

export default Home;