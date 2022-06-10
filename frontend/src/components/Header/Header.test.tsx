import { render } from "@testing-library/react";
import Header from "./index";

const setup = () => {
  return <Header isChecked={true} onToggle={() => {}} />;
};

describe("Header", () => {
  it("title render test", () => {
    const renderHeader = setup();

    expect(renderHeader.props.isChecked).toBe(true);
  });

  it("is succesfully rendered header title", () => {
    const renderHeader = render(setup());

    renderHeader.getByText("Dem Dx Autocomplete");
  });
});
