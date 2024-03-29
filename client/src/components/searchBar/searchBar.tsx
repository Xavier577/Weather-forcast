import { FC } from "react";
import { SearchBoxProps } from "../../types/interface";

const SearchBar: FC<SearchBoxProps> = ({
  name,
  list,
  className,
  value,
  placeholder,
  handleChange,
  formAction,
  formMethod,
  submissionAction
}) => {
  return (
    <div className={className}>
      <form action={formAction} method={formMethod} onSubmit={submissionAction}>
        <input
          list={list}
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
