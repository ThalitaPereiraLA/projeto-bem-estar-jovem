import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Tools from "./pages/Tools";
import Videos from "./pages/Videos";
import HelpList from "./pages/HelpList";
import Header from "./components/Header";
import HelpButton from "./components/HelpButton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-200 via-blue-100 to-purple-200 text-gray-800 font-sans">
        <Header />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/help" element={<HelpList />} />
          </Routes>
        </main>
        <HelpButton />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
