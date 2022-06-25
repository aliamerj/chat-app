import { styled } from "@mui/material/styles";
export const ContainerStyle = styled("div")(() => ({
  height: "85vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginTitleStyle = styled("h1")(() => ({
  position: "absolute",
  top: "150px",
  fontFamily: "cursive",
}));
export const WrapperStyle = styled("div")(() => ({
  width: "50%",
  height: "75%",
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  WebkitBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  MozBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
}));

export const Leftstyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const Rightstyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const CenterStyle = styled("div")(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));
export const LineStyle = styled("div")(() => ({
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
  backgroundColor: "LightGreen",
  border: "none",
  padding: "15px 20px",
  borderRadius: "10px",
  fontFamily: "cursive",
}));
