// @ts-ignore
import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Login from '../app/login/page'

describe('Dashboard', () => {
  it('ログイン画面が表示されていること', async () => {
    render(await Login())
    expect(screen.getByText('login')).toBeTruthy()
  })
})
