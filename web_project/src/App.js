import React from "react";
import "./styles.css";
import "./App.css"
import TopNev from "./components/TopNev";
import Sidebar from "./components/sidebar/Sidebar";
import TopText from "./components/TopText";


export default function App() {
  return (
    <div className="App">
      <TopNev/>
      <div className="container">
      <Sidebar />
      <div className="others">dksdksdksdkdkskds</div>
      <TopText />
      </div>
    </div>
  );
}