import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../Hooks/useBlogs";
import NotFound from "../Pages/NotFound.jsx";
import config from "../config.js";
import { formatDate } from "../Utils/formatDate";
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
        <div className="featuredSkeleton loading" />
        <div className="rowSkeleton loading" />
        <div className="rowSkeleton loading" />
        <div className="rowSkeleton loading" />
      </div>
    );
  if (error) {
    return <NotFound />;
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="emptyBlogPage flexColumn">
        <h3>:( przepraszamy</h3>
        <p>Nie ma aktualnie żadnych opublikowanych wpisów na bloga</p>
        <Link to="/">
          <button>Powrót do strony głównej</button>
        </Link>
      </div>
    );
  }

  const [featured, ...rest] = blogs;

  return (
    <div className="blogPage flexColumn">
      <div className="blogPageInner">
        <div className="blogPageHeader">
          <p className="eyebrow">Blog</p>
          <h1>Blog Kom-Part</h1>
          <p>
            Porady, poradniki i praktyczna wiedza o sprzęcie komputerowym —
            prosto od naszego serwisu w Żorach.
          </p>
        </div>

        <Link className="featuredPost flex" to={`/blog/${featured.Slug}`}>
          <div className="featuredCover gridCenter">
            {featured.CoverImage && (
              <img
                src={`${config.api}${featured.CoverImage.url}`}
                alt={featured.Title}
                loading="lazy"
              />
            )}
          </div>
          <div className="featuredContent flexColumn">
            <p className="eyebrow">Najnowszy wpis</p>
            <p className="postDate">{formatDate(featured.publishedAt)}</p>
            <h2>{featured.Title}</h2>
            <p className="postExcerpt">{featured.Excerpt}</p>
            <span className="readMoreBtn">Czytaj cały artykuł</span>
          </div>
        </Link>

        {rest.length > 0 && (
          <>
            <p className="eyebrow morePostsLabel">Więcej wpisów</p>
            <div className="postList flexColumn">
              {rest.map(
                ({ id, Slug, Title, Excerpt, CoverImage, publishedAt }) => (
                  <Link className="postRow flex" key={id} to={`/blog/${Slug}`}>
                    <div className="postThumb gridCenter">
                      {CoverImage && (
                        <img
                          src={`${config.api}${CoverImage.url}`}
                          alt={Title}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="postRowContent flexColumn">
                      <p className="postDate">{formatDate(publishedAt)}</p>
                      <h2>{Title}</h2>
                      <p className="postExcerpt">{Excerpt}</p>
                      <span className="readMore">Czytaj więcej →</span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
