import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ApiData } from "../types/interface";

const useFetchSearchQuery = (
  searchQuery: string | number | readonly string[],
  dependency: any
) => {
  const [searchQueryData, setSearchQueryData] = useState<ApiData>();
  const [fetchError, setFetchError] = useState();
  useEffect(() => {
    if (searchQuery) {
      fetch("/locationSearchQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          searchQuery
        })
      })
        .then((endpointResponse) => endpointResponse.json())
        .then((endpointData: ApiData) => setSearchQueryData(endpointData))
        .catch((error) => setFetchError(error));
    }
  }, [...dependency]);

  return { searchQueryData, fetchError };
};

export default useFetchSearchQuery;