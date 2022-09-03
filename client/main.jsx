import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";
import { CookiesProvider } from "react-cookie";

Meteor.startup(() => {
  render(
    <CookiesProvider>
      <App />
    </CookiesProvider>,
    document.getElementById("react-target")
  );
});
