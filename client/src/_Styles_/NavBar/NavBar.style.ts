import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  height: "70px",
  backgroundColor: "#FAFAF0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
  boxShadow: "7px 8px 7px -4px rgba(0,0,0,0.65)",
  WebkitBoxShadow: "7px 8px 7px -4px rgba(0,0,0,0.65)",
  MozBoxShadow: "7px 8px 7px -4px rgba(0,0,0,0.65)",
}));
export const DashboardListStyle = styled("ul")(() => ({
  display: "flex",
  alignItems: "center",
  listStyle: "none",
}));
export const DashboardItemListStyle = styled("li")(() => ({
  marginRight: "20px",
  fontWeight: "500",
  fontFamily: "Helvetica",
  cursor: "pointer",
}));

export const UsernameStyle = styled('span')(({theme}) => ({
  [theme.breakpoints.down('md')]:{
    display: "none",
  }

}))
