import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  width: "100%",
  margin: "0 auto",
}));

export const WrapperStyle = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",

  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));
export const WrapperInterStyle = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  WebkitBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  MozBoxShadow: "5px 5px 38px 13px rgba(0,0,0,0.54)",
  width: "680px",
  background: "#fff",
  position: "relative",
  paddingLeft: "110px",
  paddingRight: "110px",
  paddingTop: "62px",
  paddingBottom: "33px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "60px",
    paddingRight: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));

export const FormStyle = styled("form")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));
export const SignWithStyle = styled("span")(() => ({
  width: "100%",
  display: "block",
  fontFamily: "unset",
  fontSize: "39px",
  color: "#555555",
  lineHeight: "1.2",
  textAlign: "center",
  paddingBottom: "53px",
}));

export const FacebookButton = styled("a")(({ theme }) => ({
  width: "calc((100% - 20px) / 2)",
  fontFamily: "inherit",
  fontSize: "19px",
  lineHeight: "1.2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  height: "70px",
  borderRadius: "10px",
  boxShadow: "0 1px 5px 0px rgba(0, 0, 0, 0.2)",
  transition: "all 0.4s",
  position: "relative",
  zIndex: 1,
  //  2
  color: "#fff",
  backgroundColor: "#3b5998",
  marginBottom: "20px",
  "::before": {
    display: "block",
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "all 0.4s",
  },
  ":haver:before": {
    opacity: 1,
  },
  ":hover": {
    color: "#fff",
    textDecoration: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const FacebookStyle = styled("img")(() => ({
  width: "30px",
  marginRight: "15px",
  paddingBottom: "3px",
}));
export const GoogleButton = styled("a")(({ theme }) => ({
  width: "calc((100% - 20px) / 2)",
  fontFamily: "inherit",
  fontSize: "19px",
  lineHeight: "1.2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  height: "70px",
  borderRadius: "10px",
  boxShadow: "0 1px 5px 0px rgba(0, 0, 0, 0.2)",
  transition: "all 0.4s",
  position: "relative",
  zIndex: 1,
  cursor: "pointer",
  //  2
  color: "#555555",
  backgroundColor: "#fff",
  marginBottom: "20px",
  "::before": {
    display: "block",
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "all 0.4s",
  },
  ":haver:before": {
    opacity: 1,
  },
  ":hover": {
    color: "black",
    textDecoration: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ImageGoogleStyle = styled("img")(() => ({
  width: "30px",
  marginRight: "15px",
  paddingBottom: "3px",
}));

export const FieldContainerStyle = styled("div")(() => ({
  paddingTop: "31px",
  paddingBottom: "9px",
}));
export const FieldTitleStyle = styled("span")(() => ({
  fontFamily: "Montserrat-SemiBold",
  fontSize: "16px",
  color: "#555555",
  lineHeight: "1.5",
}));
export const InputWrapperStyle = styled("div")(() => ({
  width: "100%",
  position: "relative",
  backgroundColor: "#f7f7f7",
  border: "1px solid #e6e6e6",
  borderRadius: "10px",
}));
export const InputStyle = styled("input")(() => ({
  fontFamily: "Poppins-Regular",
  color: "#333333",
  lineHeight: 1.2,
  fontSize: "18px",
  display: "block",
  width: "100%",
  background: "transparent",
  height: "60px",
  padding: "0 20px",
  outline: "none",
  border: "none",
  ":focus": {
    borderColor: "transparent",
  },
}));

export const LoginButtonContainter = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "17px",
  paddingBottom: "30px",
}));

export const LoginButton = styled("button")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 20px",
  width: "100%",
  height: "60px",
  backgroundColor: "#333333",
  borderRadius: "10px",
  fontFamily: "cursive",
  fontSize: "20px",
  color: "#fff",
  lineHeight: 1.2,
  cursor: "pointer",

  transition: "all 0.4s",
  position: "relative",
  zIndex: 1,

  ":hover:before": {
    opacity: 1,
  },
  "::before": {
    display: "block",
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "all 0.4s",
  },
}));
