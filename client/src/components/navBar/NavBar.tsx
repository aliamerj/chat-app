import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar color="default" position="sticky" style={{ marginBottom: "20px" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CHAT WITH
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
