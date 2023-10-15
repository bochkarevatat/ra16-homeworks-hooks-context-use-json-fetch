import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.status);
        }
        setData(responseData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}