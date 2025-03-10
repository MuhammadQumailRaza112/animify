'use client';
import { keyframes, styled } from '@mui/material';

import { CircleName } from './index';

const Circle1 = keyframes`
  0% {
    left: 51.2%; 
    top: 9.5%; 
  }
  30% {
    left: 54.1%; 
    top: -14.3%; 
  }
  60% {
    left: 59.2%; 
    top: 36.5%; 
  }
  100% {
    left: 51.2%; 
    top: 9.5%; 
  }
`;

const Circle2 = keyframes`
  0% {
    left: 82.6%; 
    top: -5.4%; 
  }
  30% {
    left: 85.2%; 
    top: 23.4%; 
  }
  60% {
    left: 28.1%; 
    top: -1.2%; 
  }
  100% {
    left: 82.6%; 
    top: -5.4%; 
  }
`;

const Circle3 = keyframes`
  0% {
    left: 33.1%; 
    top: -26.6%; 
  }
  30% {
    left: 41.9%; 
    top: 15.3%; 
  }
  60% {
    left: 71.4%; 
    top: 6.8%; 
  }
  100% {
    left: 33.1%; 
    top: -26.6%; 
  }
`;

const Circle4 = keyframes`
  0% {
    left: 0%;
    top: 1.5%; 
  }
  30% {
    left: 0%;
    top: 20.8%; 
  }
  60% {
    left: 113.3%; 
    top: 42.9%; 
  }
  100% {
    left: 0%;
    top: 1.5%; 
  }
`;

export const Background = styled('div')(({ theme: { vars } }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: vars?.palette.background.default,
  overflow: 'hidden',
  zIndex: -10,
}));

export const Circle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'name',
})<{ name: CircleName }>(({ theme: { vars, palette }, name }) => {
  let style: any = {
    position: 'absolute',
    clipPath: 'circle(50%)',
  };
  if (name === 'circle1') {
    style = {
      ...style,
      width: '635px',
      height: '635px',
      animation: `${Circle1} 15s linear infinite`,
      background:
        palette.mode === 'dark'
          ? 'rgba(201, 115, 255, 0.5)'
          : 'rgba(201, 115, 255, 0.3)',
    };
  }
  if (name === 'circle2') {
    style = {
      ...style,
      width: '374px',
      height: '374px',
      animation: `${Circle2} 15s linear infinite`,
      background:
        palette.mode === 'dark'
          ? 'rgba(143, 210, 255, 0.5)'
          : 'rgba(143, 210, 255, 0.3)',
    };
  }
  if (name === 'circle3') {
    style = {
      ...style,
      width: '481px',
      height: '481px',
      animation: `${Circle3} 15s linear infinite`,
      background:
        palette.mode === 'dark'
          ? 'rgba(255, 160, 177, 0.5)'
          : 'rgba(255, 160, 177, 0.3)',
    };
  }
  if (name === 'circle4') {
    style = {
      ...style,
      width: '720px',
      height: '720px',
      animation: `${Circle4} 15s linear infinite`,
      background:
        palette.mode === 'dark'
          ? 'rgba(37, 175, 250, 0.5)'
          : 'rgba(22, 128, 185, 0.3)',
    };
  }
  return style;
});

export const Glass = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(150px)',
  background:
    theme.palette.mode === 'dark' ? 'rgba(49, 15, 183, 0.8)' : 'rgba(76, 93, 179, 0)',
  zIndex: -9,
}));
