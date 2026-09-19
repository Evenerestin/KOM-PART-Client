import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../Hooks/useBlogs";
import NotFound from "../Pages/NotFound.jsx";
import BlogCoverPlaceholder from "../Components/BlogCoverPlaceholder.jsx";
import config from "../config.js";
import { formatDate } from "../Utils/formatDate";
import "./css/Blog.css";

const skeletonLine = (width, height, className = "") => (
  <div
    className={`skeletonLine skeletonShimmer ${className}`.trim()}
    style={{ width, height }}
  />
);

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
      <div className="loadingBlogPage flexColumn" aria-busy="true">
        <div className="blogPageInner">
          <div className="blogPageHeader skeletonHeader">
            {skeletonLine("4rem", "0.9rem")}
            {skeletonLine("min(22rem, 80%)", "3.2rem", "skeletonTitle")}
            <div className="skeletonStack skeletonIntro">
              {skeletonLine("100%", "1rem")}
              {skeletonLine("70%", "1rem")}
            </div>
          </div>

          <div className="featuredPost flex">
            <div className="featuredCover skeletonShimmer" />
            <div className="featuredContent flexColumn skeletonStack">
              {skeletonLine("7rem", "0.8rem")}
              {skeletonLine("6rem", "0.75rem")}
              {skeletonLine("90%", "2.25rem")}
              {skeletonLine("55%", "2.25rem")}
              {skeletonLine("100%", "0.9rem")}
              {skeletonLine("80%", "0.9rem")}
              {skeletonLine("12rem", "2.9rem", "skeletonPill")}
            </div>
          </div>

          <div className="morePostsLabel">{skeletonLine("8rem", "0.8rem")}</div>
          <div className="postList flexColumn">
            {[0, 1, 2].map((i) => (
              <div className="postRow flex" key={i}>
                <div className="postThumb skeletonShimmer" />
                <div className="postRowContent flexColumn skeletonStack">
                  {skeletonLine("6rem", "0.75rem")}
                  {skeletonLine("65%", "1.55rem")}
                  {skeletonLine("100%", "0.9rem")}
                  {skeletonLine("75%", "0.9rem")}
                  {skeletonLine("7rem", "0.75rem")}
                </div>
              </div>
            ))}
          </div>
        </div>
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
            {featured.CoverImage ? (
              <img
                src={`${config.api}${featured.CoverImage.url}`}
                alt={featured.Title}
                loading="lazy"
              />
            ) : (
              <BlogCoverPlaceholder />
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
                      {CoverImage ? (
                        <img
                          src={`${config.api}${CoverImage.url}`}
                          alt={Title}
                          loading="lazy"
                        />
                      ) : (
                        <BlogCoverPlaceholder />
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
