import "./Loader.css";
import logo from "../assets/logo/logo.jpeg";

function Loader() {
  return (
    <div className="loader">

      <div className="loader-card">

        <img
          src={logo}
          alt="Shriram Masales"
          className="loader-logo"
        />

        <h1>Shriram Masales</h1>

        <p>Premium Quality Turmeric Powder</p>

        <div className="loader-spinner">
          <span></span>
        </div>

        <small>Loading...</small>

      </div>

    </div>
  );
}

export default Loader;