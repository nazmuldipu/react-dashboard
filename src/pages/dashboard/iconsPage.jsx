import React from "react";
import Icons from "../../lib/icons";
import { ReactComponent as Icon } from "../../assets/icons/forms.svg";

const IconsPage = () => {
  return (
    <div>
      <Icons name={"Dashboard"} className="dash-logo" />
      <Icon className="dash-logo" fill="red" stroke="blue" />
    </div>
  );
};

export default IconsPage;
