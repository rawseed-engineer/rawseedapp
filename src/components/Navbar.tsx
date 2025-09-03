import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          {/* <Link
            to="/"
            style={{
              textDecoration: location.pathname === "/" ? "underline" : "none",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          > */}
          <Link
            to="/rawseedapp"
            style={{
              textDecoration:
                location.pathname === "/rawseedapp" ? "underline" : "none",
              fontWeight:
                location.pathname === "/rawseedapp" ? "bold" : "normal",
            }}
          >
            Rawseed
          </Link>
        </li>
        <li>
          {/* <Link
            to="/products"
            style={{
              textDecoration:
                location.pathname === "/products" ? "underline" : "none",
              fontWeight: location.pathname === "/products" ? "bold" : "normal",
            }}
          > */}
          <Link
            to="/rawseedapp/sesame-oil"
            style={{
              textDecoration:
                location.pathname === "/rawseedapp/sesame-oil"
                  ? "underline"
                  : "none",
              fontWeight:
                location.pathname === "/rawseedapp/sesame-oil"
                  ? "bold"
                  : "normal",
            }}
          >
            Sesame Oil
          </Link>
        </li>
        <li>
          {/* <Link
            to="/contact-us"
            style={{
              textDecoration:
                location.pathname === "/contact-us" ? "underline" : "none",
              fontWeight:
                location.pathname === "/contact-us" ? "bold" : "normal",
            }}
          > */}
          <Link
            to="/rawseedapp/blackseed-oil"
            style={{
              textDecoration:
                location.pathname === "/rawseedapp/blackseed-oil"
                  ? "underline"
                  : "none",
              fontWeight:
                location.pathname === "/rawseedapp/blackseed-oil"
                  ? "bold"
                  : "normal",
            }}
          >
            Blackseed Oil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
