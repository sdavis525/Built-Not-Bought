import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import WorkoutDetail from "./pages/WorkoutDetail";
import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/workout/:id" element={<WorkoutDetail />} />
      
    </Routes>
    <Footer />
  </Box>
);

export default App;
