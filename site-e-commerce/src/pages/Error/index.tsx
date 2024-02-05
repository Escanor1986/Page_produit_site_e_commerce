import { Link } from 'react-router-dom';
import image from '../../assets/favicon.png';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Error 404</h1>
      <p className="error-message">
        Oops... seems you are not on the right way!
      </p>
      <p className="return-home">
        Click just below to return to the HomePage ...
      </p>
      <Link to="/" className="home-link">
        <img
          src={image}
          alt="HomePage logo"
          width={80}
          height={80}
          className="home-logo"
        />
      </Link>
    </div>
  );
};

export default ErrorPage;
