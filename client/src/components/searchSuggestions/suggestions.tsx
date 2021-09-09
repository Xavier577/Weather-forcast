import { FC } from "react";
import { ApiData } from "../../types/types";

const Suggestions: FC<{
  id?: string;
  className?: string;
  resultData?: ApiData;
}> = ({ id, className, resultData }) => {
  console.log(resultData);
  return (
    <datalist id={id} className={className}>
      {resultData
        ? resultData.map((data, idx) => (
            <option key={idx}>
              {data.name}, {data.country}
            </option>
          ))
        : null}
    </datalist>
  );
};

export default Suggestions;
