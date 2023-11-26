import { SignInBtn } from '@components/signInBtn'
import { Box } from '@mui/material'
import React, { Suspense } from 'react'

export const Header = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <Suspense>
      <SignInBtn />
    </Suspense>
  </Box>
)
