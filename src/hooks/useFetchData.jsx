import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let cancel;
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_API}`,
    };

    axios({
      url: import.meta.env.VITE_CONTENTFUL_GRAPH_URL,
      method: "post",
      headers: headers,
      data: { query },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setData(response.data.data.nzentryCollection.items);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.log(`ERROR: Could not fetch data. ${err}`);
      });
    return () => cancel();
  }, []);

  return data;
}
