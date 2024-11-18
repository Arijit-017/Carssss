import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AddCarForm from "./components/AddCarForm";

function App() {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Tesla Model S",
      description: "Luxury electric sedan with incredible performance and range.",
      image: "./images/teslaModelS.avif",
      price: "$89,990",
      rating: 4.0,
    },
    {
      id: 2,
      name: "Porsche 911",
      description: "Iconic sports car delivering unmatched driving experience.",
      image: "./images/porche911.avif",
      price: "$106,100",
      rating: 3.0,
    },
    {
      id: 3,
      name: "BMW M3",
      description: "High-performance luxury sedan with racing heritage & high speed.",
      image: "./images/bmwM3.avif",
      price: "$72,800",
      rating: 5.0,
    },
  ]);

  const addCar = (newCar) => {
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero cars={cars} />} />
        <Route path="/addCar" element={<AddCarForm addCar={addCar} />} />
      </Routes>
    </Router>
  );
}

export default App;