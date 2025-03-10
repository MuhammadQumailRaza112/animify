"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const HeaderContainer = styled("div")(({}) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "624px",
  background: "linear-gradient(to right, #171D2D, #040B1D)",
  gap: "10px",
  borderRadius:'200px',
  padding: "14px 32px",
  zIndex:9999,
}));

export const LinkWrapper = styled(Box)(({}) => ({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
}));

export const Text = styled(Typography)(({}) => ({
  color: "#fff",
  fontSize: "14px",
}));

export const ExploreButton = styled(Button)(({}) => ({
  backgroundColor: "#03263D",
  borderRadius: "10px",
  border: "1px solid #0099FF",
  boxShadow: "inset 0px 0px 5px 1px #0099FF",
  transition: "0.3s",
  textTransform:'inherit'
}));
