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
            to="/spa-web"
            style={{
              textDecoration:
                location.pathname === "/spa-web" ? "underline" : "none",
              fontWeight: location.pathname === "/spa-web" ? "bold" : "normal",
            }}
          >
            Home
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
            to="/spa-web/products"
            style={{
              textDecoration:
                location.pathname === "/spa-web/products"
                  ? "underline"
                  : "none",
              fontWeight:
                location.pathname === "/spa-web/products" ? "bold" : "normal",
            }}
          >
            Products
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
            to="/spa-web/contact-us"
            style={{
              textDecoration:
                location.pathname === "/spa-web/contact-us"
                  ? "underline"
                  : "none",
              fontWeight:
                location.pathname === "/spa-web/contact-us" ? "bold" : "normal",
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
