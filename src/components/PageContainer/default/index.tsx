"use client";

import { ReactNode } from "react";

import * as Styled from "./Styled";
import Background from "@/assets/svg/HomeBackground.svg";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Styled.PageContainer>
      <Styled.NextImage
        src={Background}
        alt="Background"
        layout="fill"
        objectFit="contain"
      />
      {children}
    </Styled.PageContainer>
  );
}
