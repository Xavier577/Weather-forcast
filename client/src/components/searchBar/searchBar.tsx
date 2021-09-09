import { FC } from "react";
import { SearchBoxProps } from "../../types/interface";
import Suggestions from "../searchSuggestions/suggestions";

const SearchBar: FC<SearchBoxProps> = ({
  name,
  list,
  value,
  placeholder,
  handleChange,
  formAction,
  formMethod,
  submissionAction
}) => {
  return (
    <div className="search-bar">
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
