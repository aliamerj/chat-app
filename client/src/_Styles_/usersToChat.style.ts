import { styled, Theme } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export const ContainerStyle = styled("div")(() => ({
  height: "100%",
}));
export const WrapperStyle = styled("div")(() => ({
  margin: "12px 0",
  display: "flex",
  cursor: "pointer",
  borderBottom: "0.2px solid green",
  ":hover": {
    backgroundColor: "#f2f2f2",
  },
}));
export const AvatarsStyle = styled("div")(() => ({
  margin: "12px",
}));
export const UsernameStyle = styled("h5")(() => ({
  flex: 1,
  fontFamily: "fantasy",
  fontSize: "85%",
}));
export const StyledBadgeStyle = styled(Badge)(
  ({ theme }: { theme: Theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  })
);
