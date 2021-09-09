import { ChangeEvent, useState } from "react";
import { FormFields } from "../types/interface";
import { DataCollectionElement } from "../types/types";

const useForm = (initialValues: FormFields) => {
  const [formFields, setFormFields] = useState(initialValues);

  return {
    formFields,
    handleChange: (e: ChangeEvent<DataCollectionElement>) => {
      setFormFields((currentValues) => ({
        ...currentValues,
        [e.target.name]: e.target.value
      }));
    }
  };
};

export default useForm;
