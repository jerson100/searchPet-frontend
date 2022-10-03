import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import LoginView from "../../../views/public/LoginView";
import RegisterView from "../../../views/public/RegisterView";
import NotFound from "../../common/NotFound";
import MainLayout from "../../layouts/MainLayout";
import PublicRouter from "../../common/PublicRouter";
import LostPetView from "../../../views/public/LostPetView";
import WeView from "../../../views/public/WeView";
import TeamView from "../../../views/public/TeamView";
import ProfileView from "../../../views/public/ProfileView";
import ResetPasswordView from "../../../views/private/ResetPasswordView";
import ConfigurationView from "../../../views/private/ConfigurationView";
import ConfigurationLayout from "../../layouts/ConfigurationLayout";
import AddPetView from "../../../views/private/AddPetView";
import PetLayout from "../../layouts/PetLayout";
import PetsView from "../../../views/public/PetsView";
import AddLostPetView from "../../../views/private/AddLostPetView";

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
          <Route path="pets" element={<PetsView />} />
          <Route path="pets/lost" element={<LostPetView />} />
          <Route path="pets" element={<PetLayout />}>
            <Route path="add" element={<AddPetView />} />
            <Route path="lost/add" element={<AddLostPetView />} />
          </Route>
          <Route path="we" element={<WeView />} />
          <Route path="team" element={<TeamView />} />
          <Route path="profile/:idUser" element={<ProfileView />} />
          <Route path="configuration" element={<ConfigurationLayout />}>
            <Route index element={<ConfigurationView />} />
            <Route path="reset-password" element={<ResetPasswordView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
