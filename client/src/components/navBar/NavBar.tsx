import { Avatar } from "@mui/material";
import { User } from "../../App";
import { userRequest } from "../../requestMethods";
import {
  ContainerStyle,
  DashboardListStyle,
  DashboardItemListStyle,
} from "../../_Styles_/NavBar/NavBar.style";
import Logo from "./utils/Logo.util";

const NavBar = ({ user }: { user: User | null }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <ContainerStyle>
      <Logo />
      <DashboardListStyle>
        <DashboardItemListStyle>
          <Avatar src={user?.image} alt={user?.name} />
        </DashboardItemListStyle>
        <DashboardItemListStyle>{user?.name}</DashboardItemListStyle>
        {user ? (
          <DashboardItemListStyle onClick={logout}>
            Logout
          </DashboardItemListStyle>
        ) : null}
      </DashboardListStyle>
    </ContainerStyle>
  );
};

export default NavBar;
