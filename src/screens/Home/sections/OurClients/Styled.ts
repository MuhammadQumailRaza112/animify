import SlidingList from '../../../../theme/SlidingLIst';
import {  Box, keyframes, styled, Typography } from '@mui/material';


export const ScrollContainer = styled(SlidingList)(({  }) => ({
    '& .content-wrapper': {
      backgorundColor:'red'
    },
  }));


  export const Container = styled(Box)(({  }) => ({
    padding: '30px 0px',
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'

  }));

  export const Heading = styled(Typography)(({theme }) => ({
      fontSize: '20px',
      color: theme.palette.grey['50'],
      marginBottom:'20px'
  }));
  
  const cardSlideLeft = keyframes`
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  export const Card = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'delay' && prop !== 'carImage',
  })<{ delay: number; carImage?: string }>(
    ({ theme: { spacing }, delay, carImage }) => ({
      background: `
    linear-gradient(to bottom,  rgba(0, 49, 67, 1), rgba(0, 0, 0, 0)), 
    url(${carImage})
  `,
      animation: `${cardSlideLeft} 0.4s ease-out forwards`,
      animationDelay: `${delay}s`,
      opacity: 0,
      transition: '0.2s all ease-in-out',
  
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 260,
      minWidth: 200,
      borderRadius: spacing(3),
      position: 'relative',
    }),
  );