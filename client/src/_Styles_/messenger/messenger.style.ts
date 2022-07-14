import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },

  height: "100%",
  padding: "auto",
  margin: "auto",
}));
export const WrapperStyle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));
export const LeftStyle = styled("div")(() => ({
  minWidth: "20%",
  borderRight: "4px solid #99ccff",
  lineHeight: "20px",
}));

export const ItemsContainerStyle = styled("div")(() => ({
  height: "100%",
  padding: "10px",
}));
export const SearchFriendStyle = styled("input")(() => ({
  width: "95%",
  padding: "10px 0",
  border: "none",
  borderBottom: "1px solid gray",
  ":focus": {
    outline: "none",
  },
  fontSize: "15px",
}));

export const CenterStyle = styled("div")(({ theme }) => ({
  minWidth: "50%",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));
export const RightStyle = styled("div")(({ theme }) => ({
  minWidth: "22.5%",
  borderLeft: "4px solid #99ccff",
  [theme.breakpoints.down("md")]: {
    borderLeft: "none",
    borderRight: "4px solid #99ccff",
  },
}));
export const LastChatTitleStyle = styled("p")(() => ({
  borderBottom: "4px solid #5F9EA0",
  fontFamily: "Helvetica",
  paddingBottom: "7px",
  paddingLeft: "5px",
}));
