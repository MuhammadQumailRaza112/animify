import { Box, IconButton, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: `calc(100% - ${theme.spacing(2)}`,
  // paddingInline: theme.spacing(2),
  backgroundColor: 'orange',

  '& *': {
    transition: 'all 0.3s ease-in-out',
  },
}));

export const ArrowRight = styled(IconButton)(
  ({
    theme,
    disabled,
  }) => ({
    padding: theme.spacing(2),

    '&:hover': {
      backgroundColor: disabled ? 'none' : theme.palette.primary.main,
      '& i': {
        color: theme.palette.common.white,
      },
    },
  }),
);

export const ArrowLeft = styled(IconButton)(
  ({
    theme,
    disabled,
  }) => ({
    padding: theme.spacing(2),

    '&:hover': {
      backgroundColor: disabled ? 'none' : theme.palette.primary.main,
      '& i': {
        color: theme.palette.common.white,
      },
    },
  }),
);

export const ContentWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flexGrow: 1,
  display: 'flex',
  overflow: 'auto',
  gap: spacing(6),
  flexDirection: 'row',
  scrollbarWidth: 'none',
  backgroundColor:'red',
  scrollBehavior: 'smooth',
  paddingBlock: spacing(2),
  paddingLeft: spacing(5),
  paddingRight: spacing(5),

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  // '-ms-overflow-style': 'none',
}));

export const ArrowsWrapper = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: spacing(2),
  marginTop: spacing(10),
}));

export const InlineArrowWrapper = styled(Box)(({ }) => ({
  position: 'absolute',
  width: '100vw',
  height: '100%',
  top: 0,
  maxWidth: '100%',
}));

export const InlineArrow = styled('div', {
  shouldForwardProp: (prop) => prop !== 'disabled',
})<{ disabled?: boolean }>(({ theme: { spacing, palette }, disabled }) => ({
  position: 'absolute',
  borderRadius: '50%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 100,
  padding: spacing(2),
  ...(disabled
    ? {
        cursor: 'default',
        backgroundColor: palette.grey[50],
      }
    : {
        cursor: 'pointer',
        backgroundColor: palette.grey[100],

        '&:hover': {
          backgroundColor: palette.primary.main,
          '& i': {
            color: palette.common.white,
          },
        },
      }),
}));

export const InlineArrowLeft = styled(InlineArrow)(
  ({ theme: { spacing } }) => ({
    left: spacing(1),
  }),
);

export const InlineArrowRight = styled(InlineArrow)(
  ({ theme: { spacing } }) => ({
    right: spacing(1),
  }),
);
