import { ChangeEvent, ReactNode } from "react";

export interface IAppThemeProps {
  children?: ReactNode;
}

export interface IAutocompleteComponentProps {
  options?: AutocompleteType;
  className?: string;
  picked: string[];
  isChecked: boolean;
  onUpdate: (picked: string[]) => void;
}

export interface IHeaderProps {
  isChecked: boolean;
  onToggle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IListElementsProps {
  title: string;
  options: string[];
}

export type AutocompleteType = { listOfSuggestions: string[] };
