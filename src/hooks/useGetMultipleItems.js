import { useState, useEffect } from "react";
import axios from "axios";

const useGetMultipleItems = (API) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const getResquest = () => {
    Promise.all(API.map((api) => axios.get(api))).then(
      axios.spread((...responses) => {
        const payload = responses.map((response) => {
          return response.data
        })

        setItems(payload)
        setLoaded(true);
      })
    ).catch((error) => setError(error));
  }

  useEffect(() => {
    getResquest();
  }, []);

  return {items, error, loaded};
};

export { useGetMultipleItems };
