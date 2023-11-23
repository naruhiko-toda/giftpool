// @ts-ignore
import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Dashboard from '../app/dashboard/page'

describe('Dashboard', () => {
  it('ダッシュボード画面が表示されていること', async () => {
    render(await Dashboard())
    expect(screen.getByText('dashboard')).toBeTruthy()
  })
})
