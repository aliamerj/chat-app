import { Avatar } from "@mui/material";
import { SIGN_OUT, START_LOGIN } from "../../store/auth.store/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { User } from "../../Types/Types";
import {
  ContainerStyle,
  DashboardListStyle,
  DashboardItemListStyle,
  UsernameStyle,
} from "../../_Styles_/NavBar/NavBar.style";
import Logo from "./utils/Logo.util";

const NavBar = ({ user }: { user: User | null }) => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(START_LOGIN());
    window.open("http://localhost:5000/auth/logout", "_self");
    dispatch(SIGN_OUT());
  };
  return (
    <ContainerStyle>
      <Logo />
      <DashboardListStyle>
        <DashboardItemListStyle>
          {user ? <Avatar src={user?.image} alt={user?.name} /> : null}
        </DashboardItemListStyle>
        <DashboardItemListStyle>
          <UsernameStyle>{user?.name}</UsernameStyle>
        </DashboardItemListStyle>
        {user ? (
          <DashboardItemListStyle onClick={() => logout()}>
            Logout
          </DashboardItemListStyle>
        ) : null}
      </DashboardListStyle>
    </ContainerStyle>
  );
};

export default NavBar;
