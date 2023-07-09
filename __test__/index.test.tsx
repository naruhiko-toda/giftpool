import { render, screen } from '@testing-library/react'
import React from "react";
import Page from "@/app/page";

describe('Home', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByText('Hello, Next.js!')

    expect(heading).toBeInTheDocument()
  })
})