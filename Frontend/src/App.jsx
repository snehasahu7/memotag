import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Traction from './components/Traction';
import Footer from './components/Footer';
import CTA from './components/CTA';
import './App.css';


const App = () => {
  const [darkmode, setdarkmode]=useState(false);
     
    useEffect(()=>{
      if(darkmode){
          document.body.classList.add("dark");
          document.body.classList.remove("light");
      }
      else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    },[darkmode])
  return (
    <div className={darkmode?"bg-gray-500":""}>
       <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar darkmode={darkmode} setdarkmode={setdarkmode}/>
      <main>
        <Hero darkmode={darkmode} setdarkmode={setdarkmode} />
        <Problem darkmode={darkmode} setdarkmode={setdarkmode}/>
        <Solution darkmode={darkmode} setdarkmode={setdarkmode}/>
        <Traction darkmode={darkmode} setdarkmode={setdarkmode}/>
        <CTA darkmode={darkmode} setdarkmode={setdarkmode}/>
      </main>
      <Footer darkmode={darkmode} setdarkmode={setdarkmode}/>
    </div>
    </div>
   
  );
};

export default App;

