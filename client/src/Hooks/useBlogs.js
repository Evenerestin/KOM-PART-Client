import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config.js";

const useBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${config.api}/api/blog-posts`, {
          params: {
            populate: "CoverImage",
            sort: "publishedAt:desc",
          },
        });
        setBlogs(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { loading, error, blogs };
};

export default useBlogs;
