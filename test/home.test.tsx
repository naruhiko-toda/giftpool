// @ts-ignore
import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('レッスン予約画面が表示されていること', async () => {
    render(await Home())
    expect(screen.getByText('レッスン予約')).toBeTruthy()
    expect(screen.getByText('コーチングレッスン')).toBeTruthy()
    expect(screen.getByText('90分/1回')).toBeTruthy()
    expect(screen.getByText(/6,000/)).toBeTruthy()
    expect(screen.getByText('ES添削レッスン')).toBeTruthy()
    expect(screen.getByText('60分/1回')).toBeTruthy()
    expect(screen.getByText(/5,000~/)).toBeTruthy()
  })
})
