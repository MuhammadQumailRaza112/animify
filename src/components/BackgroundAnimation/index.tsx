'use client';
import React from 'react';


import * as Styled from './Styled';

export type CircleName = 'circle1' | 'circle2' | 'circle3' | 'circle4';

const BackgroundAnimation = () => {

  return (
    <>
      <Styled.Background>
        {Array.from({ length: 4 }).map((_, index) => (
          <Styled.Circle
            key={index}
            name={`circle${index + 1}` as CircleName}
          />
        ))}
      </Styled.Background>
      <Styled.Glass />
    </>
  );
};

export default BackgroundAnimation;
