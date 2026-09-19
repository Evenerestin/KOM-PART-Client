import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import ErrorIcon from "../Assets/ErrorIcon";
import BlogCoverPlaceholder from "../Components/BlogCoverPlaceholder.jsx";
import config from "../config.js";
import useBlogPost from "../Hooks/useBlogPost";
import "./css/BlogEntry.css";

const BlogEntry = () => {
  const { slug } = useParams();
  let { loading, error, blog: matchedBlog } = useBlogPost(slug);
  if (loading) return <p>Ładowanie...</p>;
  if (error) {
    return <p>Błąd podczas pobierania danych</p>;
  }
  if (!matchedBlog) {
    return (
      <div className="emptyBlogEntryPage flexColumn">
        <div className="content flex">
          <ErrorIcon className="errorIcon" />
          <p>Nie znaleziono pasującego wpisu na bloga.</p>
        </div>
        <Link to="/">
          <button>Powrót do strony głównej</button>
        </Link>
      </div>
    );
  }

  const { Title, Excerpt, Content, CoverImage, publishedAt } = matchedBlog;

  return (
    <div className="blogEntryPage">
      <div className="blogBanner flexColumn">
        <h1>{Title}</h1>
        <h3>{Excerpt}</h3>
      </div>
      <div className="blogContent flex">
        <div className="cover gridCenter">
          {CoverImage ? (
            <img
              src={`${config.api}${CoverImage.url}`}
              aria-hidden="true"
              loading="lazy"
            />
          ) : (
            <BlogCoverPlaceholder />
          )}
        </div>
        <div className="entryMarkdownContent">
          <ReactMarkdown>{Content}</ReactMarkdown>
          <p className="publicationDate">{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
