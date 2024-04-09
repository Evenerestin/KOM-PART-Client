import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config.js";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(`${config.api}/api/blogs?populate=*`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  const blogs = data?.data;

  return { loading, error, blogs };
};

export default useFetch;
