import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import useBlogs from "../Hooks/useBlogs";
import NotFound from "../Pages/NotFound.jsx";
import config from "../config.js";
import "./css/Blog.css";

const Blog = () => {
  let { loading, error, blogs } = useBlogs();
  const [delayedLoading, setLoadingDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || delayedLoading)
    return (
      <div className="loadingBlogPage flexColumn">
        <div className="blogEntrySkeleton flex">
          <div className="blogCover loading"></div>
          <div className="blogContent loading"></div>
        </div>
        <div className="blogEntrySkeleton flex">
          <div className="blogCover loading"></div>
          <div className="blogContent loading"></div>
        </div>
        <div className="blogEntrySkeleton flex">
          <div className="blogCover loading"></div>
          <div className="blogContent loading"></div>
        </div>
      </div>
    );
  if (error) {
    console.log(error);
    return <NotFound />;
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="emptyBlogPage">
        <h3>:( przepraszamy </h3>
        <p>Nie ma aktualnie żadnych opublikowanych wpisów na bloga</p>
        <Link to="/">
          <button>Powrót do strony głównej</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="blogPage flexColumn">
      {blogs.map(({ id, Slug, Title, Excerpt, Content, CoverImage, publishedAt }) => (
        <Link className="blogHeader flex" key={id} to={`/blog/${Slug}`}>
          <div className="blogCover gridCenter">
            {CoverImage && (
              <img
                loading="lazy"
                aria-hidden="true"
                src={`${config.api}${CoverImage.url}`}
              />
            )}
          </div>
          <div className="blogContent flexColumn">
            <h2>{Title}</h2>
            <div>
              <h3>{Excerpt}</h3>
              <ReactMarkdown className="markdownContent">
                {Content}
              </ReactMarkdown>
              <p className="publicationDate">{publishedAt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
