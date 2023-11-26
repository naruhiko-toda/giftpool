'use client'
import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'

export function SignInBtn() {
  return (
    <Button variant="contained" onClick={() => signIn()}>
      ログイン
    </Button>
  )
}
