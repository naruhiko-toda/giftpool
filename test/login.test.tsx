// @ts-ignore
import { describe, expect, it } from 'bun:test'
import Login from '@/app/login/page'
import { render, screen } from '@testing-library/react'

describe('Dashboard', () => {
  it('ログイン画面が表示されていること', async () => {
    render(await Login())
    expect(screen.getByText('login')).toBeTruthy()
  })
})
