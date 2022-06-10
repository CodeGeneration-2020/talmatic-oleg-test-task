import ListElements from "./index";
import { render } from "@testing-library/react";

const mockedItems = ["item 1", "item 2"];

const setup = () => {
  return render(
    <ListElements options={mockedItems} title={"title test case"} />
  );
};

describe("ListElements", () => {
  it("title render test", () => {
    const renderedList = setup();

    renderedList.getByText("title test case");
  });

  it("render all elements in selected list", () => {
    const renderedList = setup();

    mockedItems.forEach((item) => renderedList.getByText(item));
  });
});
