import { FC } from "react";
import { SearchApiData } from "../../types/types";

const Suggestions: FC<{
  id?: string;
  className?: string;
  resultData?: SearchApiData;
}> = ({ id, className, resultData }) => {
  return (
    <>
      {resultData && resultData.length > 0 ? (
        <datalist id={id} className={className}>
          {resultData?.map((data, idx) => (
            <option key={idx}>
              {data.name}, {data.country}
            </option>
          ))}
        </datalist>
      ) : null}
    </>
  );
};

export default Suggestions;
