import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import ErrorIcon from "../Assets/ErrorIcon";
import useFetch from "../Hooks/useFetch";
import "./css/BlogEntry.css";
import config from "../config.js";

const BlogEntry = () => {
  let { loading, error, blogs } = useFetch();
  const { title } = useParams();
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error fetching data</p>;
  }
  const matchedBlog = blogs.find((blog) => blog.attributes.title === title);
  console.log(matchedBlog);
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

  return (
    <div className="blogEntryPage">
      <div className="blogBanner flexColumn">
        <h1>{matchedBlog.attributes.title}</h1>
        <h3>{matchedBlog.attributes.subtitle}</h3>
      </div>
      <div className="blogContent flex">
        <div className="cover gridCenter">
          {/* <img
            src={`http://64.226.83.25:1337${matchedBlog.attributes.cover.data.attributes.url}`}
            alt=""
          /> */}
          <img
            src={`${config.api}${matchedBlog.attributes.cover.data.attributes.url}`}
            alt=""
          />
        </div>
        <div className="entryMarkdownContent">
          <ReactMarkdown>{matchedBlog.attributes.content}</ReactMarkdown>
          <p className="publicationDate">
            {matchedBlog.attributes.publicationDate}
          </p>
          <div className="mediaFiles">
            {matchedBlog.attributes.media.data &&
              matchedBlog.attributes.media.data.map(({ id, attributes }) =>
                attributes.ext !== ".jpg" &&
                attributes.ext !== ".jpeg" &&
                attributes.ext !== ".png" ? (
                  <a key={id} href={attributes.name} download={attributes.name}>
                    {attributes.name}
                  </a>
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
