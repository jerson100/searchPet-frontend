import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";
import LoginView from "../../../views/public/LoginView";
import RegisterView from "../../../views/public/RegisterView";
import ErrorPage from "../../common/ErrorPage";
import MainLayout from "../../layouts/MainLayout";
import PublicRouter from "../../common/PublicRouter";
import WeView from "../../../views/public/WeView";
import TeamView from "../../../views/public/TeamView";
import ResetPasswordView from "../../../views/private/ResetPasswordView";
import ConfigurationView from "../../../views/private/ConfigurationView";
import ConfigurationLayout from "../../layouts/ConfigurationLayout";
import AddPetView from "../../../views/private/AddPetView";
import PetLayout from "../../layouts/PetLayout";
import PetsView from "../../../views/public/PetsView";
import AddLostPetView from "../../../views/private/AddLostPetView";
import LostPetsView from "../../../views/public/LostPetsView";
import LostPetView from "../../../views/public/LostPetView";
import PetView from "../../../views/public/PetView";
import UserProfileView from "../../../views/public/UserProfileView";
import UserPets from "../../../views/public/UserProfileView/views/UserPets";
import UserLostPets from "../../../views/public/UserProfileView/views/UserLostPets";
import UsActivities from "../../../views/public/UserProfileView/views/UsActivities";
import VerifyRegisterAccountToken from "../../../views/public/VerifyRegisterAccountToken";
import { SocketProvider } from "../../../contexts/socketContext";
import NotificationsView from "../../../views/private/NotificationsView";

const AppRouter = () => {
  return (
    <Router>
      <SocketProvider>
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
            <Route path="notifications" element={<NotificationsView />} />
            <Route path="home" element={<HomeView />} />
            <Route path="pets" element={<PetsView />} />
            <Route
              path="auth/verify"
              element={<VerifyRegisterAccountToken />}
            />
            <Route path="pets/:idPet" element={<PetView />} />
            <Route path="pets/lost" element={<LostPetsView />} />
            <Route path="pets/lost/:idLostPet" element={<LostPetView />} />
            <Route path="pets" element={<PetLayout />}>
              <Route path="add" element={<AddPetView />} />
              <Route path="lost/add" element={<AddLostPetView />} />
            </Route>
            <Route path="we" element={<WeView />} />
            <Route path="team" element={<TeamView />} />
            <Route path="users/:idUser" element={<UserProfileView />}>
              <Route index element={<UsActivities />} />
              <Route path="activities" element={<UsActivities />} />
              <Route path="pets" element={<UserPets />} />
              <Route path="lost-pets" element={<UserLostPets />} />
            </Route>
            <Route path="configuration" element={<ConfigurationLayout />}>
              <Route index element={<ConfigurationView />} />
              <Route path="reset-password" element={<ResetPasswordView />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </SocketProvider>
    </Router>
  );
};

export default AppRouter;
