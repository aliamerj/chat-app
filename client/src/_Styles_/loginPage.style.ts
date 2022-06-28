import { styled } from "@mui/material/styles";
export const ContainerStyle = styled("div")(() => ({
  height: "85vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const LoginTitleStyle = styled("h1")(({ theme }) => ({
  fontFamily: "cursive",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  width: "50%",
  height: "75%",
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  WebkitBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  MozBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    height: "90%",
    flexDirection: "column",
  },
}));

export const Leftstyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));
export const Rightstyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));
export const CenterStyle = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    position: "relative",
  },
}));
export const LineStyle = styled("div")(({ theme }) => ({
  width: "1px",
  height: "50vh",
  backgroundColor: "lightgray",
  zIndex: "-1",
  position: "absolute",
  top: "5",
  button: "0",
  left: "0",
  right: "0",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    height: "0.5px",
    width: "300px",
  },
}));
export const OrStyle = styled("div")(() => ({
  border: "2px solid lightgray",
  borderRadius: "50%",
  padding: "10px",
  color: "gray",
  backgroundColor: "white",
  fontWeight: "bold",
  cursor: "default",
}));

export const LoginButtonStyle = styled("div")(
  ({ method }: { method: string }) => ({
    width: "150px",
    padding: "15px 25px",
    borderRadius: "5px",
    color: "white",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: "20px",
    cursor: "pointer",
    backgroundColor:
      method === "Google"
        ? "#df4930"
        : method === "Facebook"
        ? "#507cc0"
        : method === "Github"
        ? "black"
        : "white",
  })
);
export const IconStyle = styled("img")(() => ({
  width: "20px",
  height: "20px",
  marginRight: "10px",
}));
export const InputStyle = styled("input")(() => ({
  width: "200px",
  padding: "15px 20px",
  marginBottom: "20px",
}));
export const SubmitStyle = styled("button")(() => ({
  width: "200px",
  backgroundColor: "aquamarine",
  border: "none",
  padding: "15px 20px",
  borderRadius: "10px",
  fontFamily: "cursive",
  cursor: "pointer",
}));
