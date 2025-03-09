"use client"

import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: theme.palette.background.dark,
  }));