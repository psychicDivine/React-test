import { useEffect, useState } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setLoadError(null);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        // console.log(`${url} data is : ` + this.data);
      })
      .catch((err) => {
        setLoadError(err);
        console.log(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, loadError };
}

export default useApi;