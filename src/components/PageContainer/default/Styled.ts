"use client";

import { styled } from "@mui/material";
import Image from "next/image";

export const PageContainer = styled("div")(({}) => ({
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

export const NextImage = styled(Image)(({}) => ({
  zIndex: 0,
  background:'transparent'
}));
