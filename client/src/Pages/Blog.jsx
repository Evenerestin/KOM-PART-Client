import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "./css/Blog.css";

const Blog = () => {
  let { loading, error, blogs } = useFetch();
  const reversedBlogs = blogs ? [...blogs].reverse() : [];
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }
  // console.log(blogs);
  // console.log(reversedBlogs);

  if (!Array.isArray(reversedBlogs) || reversedBlogs.length === 0) {
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
      {reversedBlogs.map(({ id, attributes }) => (
        <Link
          className="blogHeader flex"
          key={id}
          to={`/blog/${attributes.title}`}
        >
          <div className="blogCover gridCenter">
            <img
              src={`http://64.226.83.25:1337${attributes.cover.data.attributes.url}`}
              alt=""
            />
          </div>
          <div className="blogContent flexColumn">
            <h2>{attributes.title}</h2>
            <div>
              <h3>{attributes.subtitle}</h3>
              <ReactMarkdown className="markdownContent">
                {attributes.content}
              </ReactMarkdown>
              <p className="publicationDate">{attributes.publicationDate}</p>
            </div>
            {/* <div className="flex">
              <Link to={`/blog/${attributes.title}`}>
              <button>Czytaj więcej...</button>
              </Link>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
