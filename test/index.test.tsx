import { render, screen } from "@testing-library/react";
import React from "react";

import Page from "../app/page";

describe("Home", () => {
  it("レッスン予約画面が表示されていること", () => {
    render(<Page />);

    const heading = screen.getByText("レッスン予約");
    expect(heading).toBeInTheDocument();

    expect(screen.getByText("コーチングレッスン")).toBeInTheDocument()
    expect(screen.getByText("90分/1回")).toBeInTheDocument()
    expect(screen.getByText("￥6,000~")).toBeInTheDocument()
    expect(screen.getByText("ES添削レッスン")).toBeInTheDocument()
    expect(screen.getByText("60分/1回")).toBeInTheDocument()
    expect(screen.getByText("￥5,000~")).toBeInTheDocument()
  });
});
