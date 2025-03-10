"use client";

import { styled } from "@mui/material";
import Image from "next/image";

export const PageContainer = styled("div")(({}) => ({
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  position:'relative'
}));

export const NextImage = styled(Image)(({}) => ({
  zIndex: 0,
  background:'transparent'
}));


export const BackgroundGradient = styled('div')(({}) => ({
  width:'50vw',
  height: '50px',
  top:'-20px',
  position:'absolute',
  left: '0px',
  right:'0px',
  margin:'auto',
  background:'radial-gradient(circle at center, rgba(0, 89, 255, 0.37) 10%,rgba(1, 1, 1, 0.32) 80%)',
}));


