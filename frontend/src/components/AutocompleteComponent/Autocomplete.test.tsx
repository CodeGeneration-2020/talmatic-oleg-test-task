import { render } from "@testing-library/react";
import AutocompleteComponent from "./index";

const { picked, isChecked, onUpdate } = {
  picked: ["test case 1", "test case 2"],
  isChecked: true,
  onUpdate: () => {},
};

const setup = () => (
  <AutocompleteComponent
    picked={picked}
    isChecked={isChecked}
    onUpdate={onUpdate}
  />
);

describe("Autocomplete", () => {
  it("is passed props", () => {
    const autocomplete = setup();

    expect(autocomplete.props.picked).toBe(picked);
    expect(autocomplete.props.isChecked).toBe(isChecked);
    expect(autocomplete.props.onUpdate).toBe(onUpdate);
  });

  it("is rendered selected", () => {
    const autocomplete = render(setup());

    picked.forEach((pickedItem) => autocomplete.getByText(pickedItem));
  });
});
