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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<UserHome />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-home" element={<UserDashboard />} />


        </Routes>
      </BrowserRouter>

      {/* <UserLogin/> */}
      {/* <UserRegister/> */}
      {/* <UserHome /> */}
      {/* <UserNav />
      <UserDashboard /> */}
      {/* <Menu/> */}
      {/* <AdminLogin/> */}
      {/* <AdminDashboard/> */}
      {/* <Resturants/> */}
      {/* <Users/> */}
      {/* <ResturantDashboard /> */}
      {/* <RegisterResturant/> */}
      {/* <ResturantLogin /> */}
      {/* <AddMenu/> */}
      {/* <Response/> */}
    </>
  );
}

export default App;
