import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
export const TextareaStyle = styled("textarea")(({ theme }) => ({
  width: "105vh",
  [theme.breakpoints.down("md")]: {
    width: "60vh",
  },

  padding: "10px",
  resize: "none",
}));

export const SendButtonStyle = styled("button")(({ theme }) => ({
  width: "75px",

  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "teal",
  color: "white",
}));
