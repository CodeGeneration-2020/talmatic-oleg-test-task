import React, { FC, SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";
import { IAutocompleteComponentProps } from "../../types/autocomplete.types";

const AutocompleteComponent: FC<IAutocompleteComponentProps> = ({
  options,
  picked,
  isChecked,
  className,
  onUpdate,
}) => {
  const listOptions = options ? [...new Set(options.listOfSuggestions)] : [];
  const limitTags = isChecked ? 2 : -1;

  const handleSelectOption = (event: SyntheticEvent, newValue: string[]) =>
    onUpdate(newValue);

  const renderTextField = (params: AutocompleteRenderInputParams) => {
    return (
      <TextField
        {...params}
        placeholder={picked.length ? "" : "Try searching..."}
      />
    );
  };

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      limitTags={limitTags}
      id="multiple-limit-tags"
      value={picked}
      onChange={handleSelectOption}
      options={listOptions}
      getOptionLabel={(option) => option}
      className={className}
      renderInput={renderTextField}
    />
  );
};

export default AutocompleteComponent;
