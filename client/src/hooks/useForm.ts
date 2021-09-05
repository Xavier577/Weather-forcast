import { ChangeEvent, useState } from "react";

const useForm = <T>(initialValues: T) => {
  const [formFields, setFormFields] = useState(initialValues);
  return {
    formFields,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setFormFields((currentValues) => ({
        ...currentValues,
        [e.target.name]: e.target.value,
      }));
    },
  };
};

export default useForm;
