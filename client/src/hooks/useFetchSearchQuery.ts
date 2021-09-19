import { useState } from "react";
import { SearchApiData } from "../types/types";
import useDebounce from "./useDebounce";

const useFetchSearchQuery = (
  searchQuery: string | number | readonly string[],
  dependency: any[]
) => {
  const [searchQueryData, setSearchQueryData] = useState<SearchApiData>();
  const [fetchError, setFetchError] = useState();
  useDebounce(
    () => {
      if (searchQuery) {
        fetch("https://forcast-server.herokuapp.com/locationSearchQuery", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            searchQuery,
          }),
        })
          .then((endpointResponse) => endpointResponse.json())
          .then((endpointData: SearchApiData) =>
            setSearchQueryData(endpointData)
          )
          .catch((error) => setFetchError(error));
      }
    },
    250,
    [...dependency]
  );

  return { searchQueryData, fetchError };
};

export default useFetchSearchQuery;
