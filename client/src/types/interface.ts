import { ChangeEvent, FormEvent } from "react";
import { DataCollectionElement } from "./types";

export interface FormFields {
  [name: string]: string | number | readonly string[];
}

export interface SearchBoxProps {
  value: string | number | readonly string[];
  name: string;
  handleChange: (e: ChangeEvent<DataCollectionElement>) => void;
  submissionAction?: (e: FormEvent<HTMLFormElement>) => void;
  formMethod?: "post" | "get" | "dialog";
  formAction?: string;
}

export interface ApiData {
  [name: string]: any;
}
