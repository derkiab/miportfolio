import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function CircularColor({ visible }) {
  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease-out',
        
        mx: 'auto',
        px: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack sx={{ color: '#53cdc2' }} spacing={2} direction="row">
        <CircularProgress sx={{ color: '#53cdc2' }} />
        <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>astroAPI</h1>
      </Stack>
    </Box>
  );
}
