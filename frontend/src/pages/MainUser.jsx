import { Outlet } from "react-router";
import Sidenav_User from "../components/SidenavUser";

const UserMain = () => {
  return (

    <div className="app">
      <div id="side">
        <Sidenav_User/>
      </div>
      <div id="home">
        <Outlet/>
      </div>
    </div>
    
  );
}

export default UserMain;