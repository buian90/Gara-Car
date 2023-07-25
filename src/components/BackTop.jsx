import { Link } from "react-router-dom";

const BackTop = () => {
  return (
    <>
      <Link to="/" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
};

export default BackTop;
