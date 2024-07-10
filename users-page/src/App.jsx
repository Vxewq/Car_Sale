import { Typography, Card } from "@material-tailwind/react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Aos from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';  


export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </>
  );
}
