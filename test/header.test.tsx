// @ts-ignore
import { describe, expect, it } from 'bun:test'
import { Header } from '@/app/header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('ヘッダー画面が表示されていること', async () => {
    render(await Header())
  })
})
