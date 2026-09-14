import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config.js";

const useBlogPost = (slug) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`${config.api}/api/blog-posts`, {
          params: {
            populate: "CoverImage",
            "filters[Slug][$eq]": slug,
          },
        });
        setBlog(response.data.data[0] ?? null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  return { loading, error, blog };
};

export default useBlogPost;
