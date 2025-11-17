import React from "react";
import { Navbar } from "../Navbar";
import { Header64 } from "./components/Header64";
import { Portfolio12 } from "./components/Portfolio12";
import { Cta45 } from "./components/Cta45";
import { Footer3 } from "./components/Footer3";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header64 />
      <Portfolio12 />
      <Cta45 />
      <Footer3 />
    </div>
  );
}
