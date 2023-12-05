'use client'
import { TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'

export const PostForm = () => {
  const textFieldRef = useRef(null)

  useEffect(() => {
    textFieldRef.current.focus()
  }, [])
  return (
    <TextField
      multiline
      fullWidth
      rows={6}
      variant="standard"
      placeholder={'今の気持ちを伝えましょう'}
      inputRef={textFieldRef}
    />
  )
}
