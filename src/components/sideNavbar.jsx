import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../lib/icons";
import "../styles/sideNavbar.scss";
import logo from "../assets/images/monerbari.png";

const SideNavbar = ({ expand }) => {
  const [navlink, setNavLink] = useState("Dashboard");
  const [subLink, setSubLink] = useState("");

  const sidenav = [
    {
      name: "Dashboard",
      icon: "fa-tachometer",
      link: "/dashboard",
      subnav: [],
    },
    {
      name: "Icons",
      icon: "fa-tachometer",
      link: "/dashboard/icons",
      subnav: [],
    },
    {
      name: "Forms",
      icon: "fa-archive",
      subnav: [
        {
          name: "Form Elements",
          icon: "fa-tags",
          link: "/dashboard/forms/form-elements",
        },
        {
          name: "Advance Forms",
          icon: "fa-shopping-bag",
          link: "/dashboard/forms/advance-forms",
        },
      ],
    },
    {
      name: "Accessories",
      link: "/dashboard/categories/add",
      icon: "fa-sign-language ",
      subCagegories: [],
    },
  ];

  const onNavClick = (link) => {
    if (navlink === link) {
      setNavLink("");
    } else {
      setNavLink(link);
    }
  };

  const onSubNavClick = (subLink) => {
    setSubLink(subLink);
  };

  const itemContainSubnav = (item) => {
    return item.subnav && item.subnav.length > 0;
  };

  const getNavClass = (item) => {
    return (
      "widget-content-category " +
      (itemContainSubnav(item) ? "has-sub-cat " : "") +
      (navlink === item.name ? "opened" : "")
    );
  };
  return (
    //   let item of sidenav
    <div className={"sidebar " + (expand ? "wide" : "narrow")}>
      <div className="brand">
        <Link to="/dashboard">
          <img className="dash-logo" src={logo} alt="Logo" />
          <span className="brand-name"> Dashboard</span>{" "}
        </Link>
      </div>
      <div className="widget-content">
        <ul>
          {sidenav.map((item) => {
            return (
              <li key={item.name}>
                {/* Main nav */}
                <Link
                  className={getNavClass(item)}
                  to={item.link ? item.link : "#"}
                  onClick={() => onNavClick(item.name)}
                >
                  {/* <i className={"fa " + item.icon}></i> */}
                  <Icons
                    name={item.name}
                    className={"dash-icon"}
                    fill={navlink === item.name ? "blue" : ""}
                    stroke={navlink === item.name ? "blue" : ""}
                  />
                  <span className="category-text"> {item.name}</span>
                </Link>

                {/* Sub navs */}
                {itemContainSubnav(item) ? (
                  <div
                    className={
                      "widget-content-sub-category " +
                      (navlink === item.name ? "opened" : "")
                    }
                  >
                    <ul>
                      {item.subnav.map((subn) => {
                        return (
                          <li
                            key={subn.name}
                            className={
                              "subnav " +
                              (subLink === subn.name ? "active" : "")
                            }
                          >
                            <Link
                              className="widget-content-sub-category-list"
                              to={subn.link}
                              onClick={() => onSubNavClick(subn.name)}
                            >
                              <span className="sub-category-text">
                                <i className="fa fa-angle-right"></i> &nbsp;{" "}
                                {subn.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
