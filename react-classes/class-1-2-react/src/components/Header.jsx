// import React from "react";
import { Link } from "react-router-dom";

const Header = ({cameFrom}) => {
  const routes = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "About",
      path: "/about",
    },
    {
      pageName: "contact",
      path: "/contact",
    },
    {
      pageName: "services",
      path: "/services",
    },
  ];

  return (
    <>
      <header>
        <div>Came from: {cameFrom}</div>
        <div>
          <ul style={{ display: "flex", gap: "15px" }}>
            {routes.map(({ pageName, path }, index) => {
              return (
                <li>
                  <Link to={path}>{pageName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
