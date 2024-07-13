import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="출석" color="primary" />
        <Chip label="지각" color="success" />
        <Chip label="결석" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="귀가" color="primary" variant="outlined" />
        <Chip label="조퇴" color="success" variant="outlined" />
        <Chip label="도망" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}; 