import { UserLogin } from "./User/pages/UserLogin";
import { UserRegister } from "./User/pages/UserRegister";
import { Test } from "./Test";
import { ReadQRcode } from "./User/components/ReadQRcode";
import { UserNav } from "./User/components/UserNav";
import { UserFooter } from "./User/components/UserFooter";
import { UserHome } from "./User/pages/UserHome";
import { UserDashboard } from "./User/pages/UserDashboard";

function App() {
  return (
    <>
      {/* <UserLogin/> */}
      {/* <UserRegister/> */}

      {/* <UserHome /> */}
      <UserNav />
      <UserDashboard />
    </>
  );
}

export default App;
