import { styled } from "@mui/material/styles";
export const ContainerMobileStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
