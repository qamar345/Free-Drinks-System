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

function App() {
  return (
    <>
      {/* <UserLogin/> */}
      {/* <UserRegister/> */}
      {/* <UserHome /> */}
      {/* <UserNav />
      <UserDashboard /> */}
      {/* <Menu/> */}
      {/* <AdminLogin/> */}
      <AdminDashboard/>
      {/* <Resturants/> */}
      {/* <Users/> */}
    </>
  );
}

export default App;
