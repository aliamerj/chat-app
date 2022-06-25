import { styled } from "@mui/material/styles";

export const dashboardListStyle = styled("ul")(() => ({
  display: "flex",
  alignItems: "center",
  listStyle: "none",
}));
export const dashboardItemListStyle = styled("li")(() => ({
  marginRight: "20px",
  fontWeight: "500",
  current: "pointer",
}));
