// Init
import React from "react";

// Importing Components
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

// Home Component
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
