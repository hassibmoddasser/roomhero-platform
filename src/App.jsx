import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./components/pages/Dashboard";
import Supplier from "./components/pages/Supplier";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div>
        <Sidebar />

        <div className="flex flex-col h-screen md:pl-64">
          <Header setSidebarOpen={setSidebarOpen} />

          <main className="flex-1 bg-white">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/supplier" element={<Supplier />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
