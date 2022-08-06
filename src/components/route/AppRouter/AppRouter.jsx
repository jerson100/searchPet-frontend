import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import LoginView from "../../../views/public/LoginView";
import RegisterView from "../../../views/public/RegisterView";
import HomeAppView from "../../../views/private/HomeAppView";
import NotFound from "../../common/NotFound";
import MainLayout from "../../layouts/MainLayout";
import AppLayout from "../../layouts/AppLayout";
import PublicRouter from "../../common/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginView />
            </PublicRouter>
          }
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="home" element={<HomeView />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<HomeAppView />} />
          <Route path="home" element={<HomeAppView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
