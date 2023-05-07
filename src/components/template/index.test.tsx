import React from "react";
import { render } from "@testing-library/react";
import BasicTemplate from ".";

describe("BasicTemplate", () => {
  const middleData = <div>Test Middle Data</div>;

  it("renders the middleData correctly", () => {
    const { getByText } = render(
      <BasicTemplate middleData={middleData} />
    );

    expect(getByText("Test Middle Data")).toBeInTheDocument();
  });
});