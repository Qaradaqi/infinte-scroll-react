import { useCallback, useEffect, useState } from "react";
import { Data } from "../models/Movies.models";
import { api } from "../utils/api";

export default function useFetch(page: number) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>([]);
  const getApi = useCallback(() => {
    setLoading(true);
    setError(false);
    api
      .get("movies", { params: { page: page } })
      .then((response) => {
        setLoading(false);
        setData((prev) => [...prev, ...response.data.data]);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  }, [page]);
  useEffect(() => {
    getApi();
  }, [getApi, page]);
  return { loading, error, data };
}
