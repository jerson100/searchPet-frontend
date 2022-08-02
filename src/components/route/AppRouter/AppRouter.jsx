import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import LoginView from "../../../views/public/LoginView";
import RegisterView from "../../../views/public/RegisterView";
import NotFound from "../../common/NotFound";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="home" element={<HomeView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
