import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
export const TextareaStyle = styled("textarea")(() => ({
  width: "80%",
  height: "90px",
  padding: "10px",
}));

export const SendButtonStyle = styled("button")(() => ({
  width: "75px",
  height: "40px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "teal",
  color: "white",
}));
