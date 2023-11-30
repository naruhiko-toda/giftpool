// @ts-ignore
import { describe, expect, it } from 'bun:test'
import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('レッスン予約画面が表示されていること', async () => {
    render(await Home())
    expect(screen.getByText('共感しよう')).toBeTruthy()
    expect(screen.getByText('起業しようか迷っています。')).toBeTruthy()
  })
})
