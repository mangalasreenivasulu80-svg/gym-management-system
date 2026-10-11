import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import PersonalTraining from "./pages/PersonalTraining";
import Booking from "./pages/Booking";

import WeightTraining from "./pages/WeightTraining";
import WeightTrainingBooking from "./pages/WeightTrainingBooking";

import CardioTraining from "./pages/CardioTraining";
import CardioTrainingBooking from "./pages/CardioTrainingBooking";

import YogaFitness from "./pages/YogaFitness";
import YogaFitnessBooking from "./pages/YogaFitnessBooking";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/clients" element={<Clients />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Personal Training */}
        <Route
          path="/personal-training"
          element={<PersonalTraining />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        {/* Weight Training */}
        <Route
          path="/weight-training"
          element={<WeightTraining />}
        />

        <Route
          path="/weight-training-booking"
          element={<WeightTrainingBooking />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />
        <Route
          path="/cardio-training"
          element={<CardioTraining />}
        />
        <Route
          path="/cardio-training-booking"
          element={<CardioTrainingBooking />}
        />
        <Route
          path="/yoga-fitness"
          element={<YogaFitness />}
        />
        <Route
          path="/yoga-fitness-booking"
          element={<YogaFitnessBooking />}
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;