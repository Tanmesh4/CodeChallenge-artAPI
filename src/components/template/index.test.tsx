import React from "react";
import { render } from "@testing-library/react";
import BasicTemplate from ".";

describe("BasicTemplate", () => {
  const middleData = <div>Test Middle Data</div>;
  const options = ["drawings"];

  it("renders the middleData correctly", () => {
    const { getByText } = render(
      <BasicTemplate
        middleData={middleData}
        options={options} handleSearchResult={undefined} handleSearch={undefined} isButtonDisabled={false} handleOptionSelected={undefined}      />
    );

    expect(getByText("Test Middle Data")).toBeInTheDocument();
  });
});
