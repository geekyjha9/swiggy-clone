import { useState } from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const navItem = [
    { name: "Home", id: "101f2", url: "/"},
    { name: "About Us", id: "102f4", url: "/about" },
    { name: "Contact Us", id: "103f7", url: "/contact" },
    { name: "Cart", id: "104f9" },
  ];

  console.log("Header Rendered");

  // if there is no dependency array => useEffect will be called on every render
  // if there is empty dependency array => useEffect will be called on initial render only (just once)
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, []);

  return [
    <div className="header-container">
      <div className="logo">
        <img className="logo-image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="header-navbar-list">
          {navItem.map((Items) => (
            <li key={Items.id}><a href={Items.url}>{Items.name}</a></li>
          ))}
          <button
            className="login"
            onClick={() => {
              loginText === "Login"
                ? setLoginText("Logout")
                : setLoginText("Login");
            }}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>,
    <hr className="header-hr" />,
  ];
};

export default Header;
