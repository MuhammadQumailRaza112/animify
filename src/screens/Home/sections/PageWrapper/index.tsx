"use client"

import React from 'react';


import * as Styled from '../../Styled';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Styled.PageContainer>
        {children}
      </Styled.PageContainer>
    </>
  );
};

export default PageWrapper;
