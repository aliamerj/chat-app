import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      marginLeft="15px"
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      CHAT WITH
    </Typography>
  );
};

export default Logo;
