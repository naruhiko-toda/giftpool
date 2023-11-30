// @ts-ignore
import { describe, expect, it } from 'bun:test'

import PostNew from '@/app/post/new/page'
import { render, screen } from '@testing-library/react'

describe('New', () => {
  it('レッスン予約画面が表示されていること', async () => {
    render(await PostNew())
    expect(screen.getByText('投稿画面')).toBeTruthy()
  })
})
