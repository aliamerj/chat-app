import { styled } from "@mui/material/styles";
export const ContainerStyle = styled("div")(() => ({
  height: "100%",
}));
export const WrapperStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
  height: "480px",
  overflowY: "scroll",
}));

export const MessageContenterStyle = styled("div")(
  ({ own }: { own: string }) => ({
    display: "flex",

    justifyContent: own === "true" ? "flex-end" : "flex-start",
  })
);
export const MessageText = styled("p")(({ own }: { own: string }) => ({
  padding: "10px",
  borderRadius: "20px",
  color: own === "true" ? "black" : "white",
  maxWidth: "300px",
  backgroundColor: own === "true" ? "rgb(245,241,241)" : "#1877f2",
}));
export const MessageUtilsStyle = styled("p")(({ own }: { own: string }) => ({
  fontSize: "12px",
  fontFamily: "Helvetica",
  textDecorationLine: "underline",

  margin: own === "true" ? "auto 10px auto auto" : "auto auto auto 10px",
}));

export const MessageWrapperStyle = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-end",
}));
export const AvatarStyle = styled("div")(({ own }: { own: string }) => ({
  margin: own === "true" ? "auto 10px 0 7px" : "0 7px",
}));
