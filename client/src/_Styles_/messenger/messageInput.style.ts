import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
export const TextareaStyle = styled("textarea")(() => ({
  width: "90%",
  padding: "10px",
  resize: "none",
}));

export const SendButtonStyle = styled("button")(() => ({
  width: "10%",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "teal",
  color: "white",
}));
