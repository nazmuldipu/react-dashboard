import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../../components/navbar";
import SideNavbar from "../../components/sideNavbar";
import DashboarPage from "./dashboardPage";
import AdvanceForms from "./forms/advance-forms";
import FormElements from "./forms/form-elements";
import IconsPage from "./iconsPage";

const DashboardRouter = () => {
  const [expand] = useState(true);

  const handleExpand = (event) => {
    console.log(event);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto p-0">
            <SideNavbar expand={expand} />
          </div>
          <div className="col p-0">
            <Navbar onChange={handleExpand} />
            <Switch>
              <Route
                path="/dashboard/forms/advance-forms"
                component={AdvanceForms}
              />
              <Route
                path="/dashboard/forms/form-elements"
                component={FormElements}
              />
              <Route path="/dashboard/icons" component={IconsPage} />
              <Route exact path="/dashboard" component={DashboarPage} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardRouter;
