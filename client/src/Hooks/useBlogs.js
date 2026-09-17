import { useEffect, useState } from "react";
import blogApi from "../blogApi.js";

const useBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.get("/api/blog-posts", {
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
