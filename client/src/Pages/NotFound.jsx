import { Link } from "react-router-dom";
import ErrorIcon from "../Assets/ErrorIcon";
import "./css/NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundPage flexColumn">
      <p className="404">404</p>
      <div className="content flex">
        <ErrorIcon className="errorIcon" />
        <p>Nie znaleziono.</p>
      </div>
      <Link to="/">
        <button>Powrót do strony głównej</button>
      </Link>
    </div>
  );
};

export default NotFound;
