import React from "react";
import { ReactComponent as Dashboard } from "../assets/icons/dashboard.svg";
import { ReactComponent as Smile } from "../assets/icons/smile.svg";
import { ReactComponent as Forms } from "../assets/icons/forms.svg";

const Icons = ({ name, ...rest }) => {
  const getImage = (icon) => {
    switch (icon) {
      case "Dashboard":
        return <Dashboard {...rest} />;
      case "Icons":
        return <Smile {...rest} />;
      case "Forms":
        return <Forms {...rest} />;
      default:
        break;
    }
  };

  return <>{getImage(name)}</>;
};

export default Icons;
