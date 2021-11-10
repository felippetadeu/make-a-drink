import React from "react";
import { useLocation } from "react-router-dom";

export default function useQuery(paramName: string) {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search).get(paramName), [search, paramName]);
}