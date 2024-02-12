import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserLogin } from "./User/pages/UserLogin";
import { UserRegister } from "./User/pages/UserRegister";
import { Test } from "./Test";
import { ReadQRcode } from "./User/components/ReadQRcode";
import { UserNav } from "./User/components/UserNav";
import { UserFooter } from "./User/components/UserFooter";
import { UserHome } from "./User/pages/UserHome";
import { UserDashboard } from "./User/pages/UserDashboard";
import { Menu } from "./User/components/Menu";
import { AdminLogin } from "./Admin/pages/AdminLogin";
import { AdminDashboard } from "./Admin/pages/AdminDashboard";
import { Resturants } from "./Admin/pages/Resturants";
import { Users } from "./Admin/pages/Users";
import { ResturantDashboard } from "./Resturant/pages/ResturantDashboard";
import { RegisterResturant } from "./Resturant/pages/RegisterResturant";
import { ResturantLogin } from "./Resturant/pages/ResturantLogin";
import { AddMenu } from "./Resturant/pages/AddMenu";
import { Response } from "./Resturant/pages/Response";
import { AddRestaurant } from "./Resturant/components/AddRestaurant";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<UserHome />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-home" element={<UserDashboard />} />
          <Route path="/menu" element={<Menu />} />

          {/* Restaurant */}
          <Route path="/register-restaurants" element={<RegisterResturant />} />
          <Route path="/restaurant-login" element={<ResturantLogin />} />
          <Route path="/add-restaurant" element={<AddRestaurant />} />
          <Route
            path="/restaurant-dashboard"
            element={<ResturantDashboard />}
          />
          <Route path="/add-menu" element={<AddMenu />} />

          {/* Admin */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/restaurant" element={<Resturants />} />
          <Route path="/users" element={<Users />} />

          {/* For Admin & Restaurants */}
          <Route path="/response" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
