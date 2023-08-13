import { render, screen } from '@testing-library/react'
import React from "react";
import Page from "../app/page";


describe('Home', () => {
  it('レッスン予約画面が表示されていること', () => {
    render(<Page />)

    const heading = screen.getByText('レッスン予約')

    expect(heading).toBeInTheDocument()
  })
})