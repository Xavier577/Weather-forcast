import { FC } from "react";
import { SearchBoxProps } from "../../types/interface";

const SearchBar: FC<SearchBoxProps> = ({
  name,
  value,
  handleChange,
  formAction,
  formMethod,
  submissionAction
}) => {
  return (
    <div className="search-bar">
      <form action={formAction} method={formMethod} onSubmit={submissionAction}>
        <input type="text" name={name} value={value} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
