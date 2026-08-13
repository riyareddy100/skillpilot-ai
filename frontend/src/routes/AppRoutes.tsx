import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Learn from "../pages/Learn/Learn";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;