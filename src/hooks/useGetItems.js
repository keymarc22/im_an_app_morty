import { useState, useEffect } from "react";
import axios from "axios";

const useGetItems = (API) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API)
        setItems(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoaded(true)
      }
    })();
  }, []);

  return {items, error, loaded};
};

export { useGetItems };
