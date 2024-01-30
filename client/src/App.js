import logo from "./logo.svg";
import "./App.css";
import { UserLogin } from "./User/pages/UserLogin";
import { UserRegister } from "./User/pages/UserRegister";
import { UserNav } from "./User/components/UserNav";
import { UserFooter } from "./User/components/UserFooter";
import { UserHome } from "./User/pages/UserHome";

function App() {
  return (
    <>
      {/* <UserLogin/> */}
      {/* <UserRegister/> */}

      <UserHome />
    </>
  );
}

export default App;
