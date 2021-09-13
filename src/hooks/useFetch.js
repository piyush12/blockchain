import { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "pending":
      return { status: "pending", data: null, error: null };
    case "resolved":
      return { status: "resolved", data: action.data, error: null };
    case "error":
      return { status: "error", data: null, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function useFetch(
  url,
  method = "GET",
  body,
  headers = {
    "content-type": "application/json;charset=UTF-8"
  }
) {
  const [state, dispatch] = useReducer(reducer, {});
  const { status, data } = state;

  useEffect(() => {
    dispatch({ type: "pending" });
    fetch(url, {
      method,
      headers,
      body: JSON.stringify({ body })
    })
      .then((data) => {
        dispatch({ type: "resolved", data });
      })
      .catch((error) => dispatch({ type: "error", error }));
  }, [method, url, body]);

  return {
    status,
    data
  };
}

export default useFetch;
