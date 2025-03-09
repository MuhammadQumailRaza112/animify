"use client";

import { Button, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HeaderWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(10),
  width: "50vw",
  maxWidth: "650px",
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "54px",
  textAlign: "center",
  fontWeight: "500",
  marginTop: theme.spacing(5),
}));

export const Hightlight = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  textAlign: "center",
  fontWeight: "500",
  marginTop: theme.spacing(5),
  color: theme.palette.grey["50"],
}));

export const ExploreButton = styled(Button)(({}) => ({
  backgroundColor: "#03263D",
  borderRadius: "12px",
  border: "1px solid #0099FF",
  boxShadow: "inset 0px 0px 5px 1px #0099FF",
  transition: "0.3s",
  padding: '5px 12px',
  textTransform: "inherit",
}));

export const DemoButton = styled(Button)(({}) => ({
  background: '"linear-gradient(to right, #1F1F1F, #191919, #0F0F0F)"',
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  transition: "0.3s",
  padding: '5px 12px',
  textTransform: "inherit",
}));

export const ButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: theme.spacing(6),
}));

export const ButtonText = styled(Typography)(({}) => ({
  color: "#fff",
  fontSize: "14px",
  textTransform: "initial",
}));

export const LayoutImage = styled(Image)(({}) => ({
  width: '100vw',
  margin:'0 auto',
}));
