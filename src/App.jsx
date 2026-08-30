import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MissionPage from "./pages/MissionPage";
import TeamPage from "./pages/TeamPage";
import Insurances from "./pages/Insurances";
import DoctorBio from "./pages/DoctorBio";

export default function App() {
  return (
    <BrowserRouter basename="/MAWF_IPA_Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/insurances" element={<Insurances />} />
        <Route path="/doctors/:id" element={<DoctorBio />} />

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <h1 className="text-7xl font-light text-slate-300">
                  404
                </h1>

                <h2 className="mt-4 text-2xl font-medium text-slate-800">
                  Page Not Found
                </h2>

                <a
                  href="/"
                  className="inline-flex mt-6 rounded-lg bg-slate-800 px-5 py-3 text-white"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}