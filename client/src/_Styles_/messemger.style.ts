import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  height: "85%",
}));
export const WrapperStyle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const LeftStyle = styled("div")(() => ({
  flex: 1,
  borderRight: "4px solid #99ccff",
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

export const CenterStyle = styled("div")(() => ({
  flex: 2.5,
}));
export const RightStyle = styled("div")(() => ({
  flex: 1,
  borderLeft: "4px solid #99ccff",
}));
export const LastChatTitleStyle = styled("p")(() => ({
  borderBottom: "4px solid #5F9EA0",
  fontFamily: "Helvetica",
  paddingBottom: "7px",
  paddingLeft: "5px",
}));
