import React, { Fragment } from "react";

const Nav_Page = (props) => {
  return (
    <Fragment>
      <div
        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-blue"
        onClick={props.myFunction}
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </div>

      <div
        className="w3-bar-item w3-button w3-padding-large w3-white"
        onClick={props.setHomePage}
      >
        Home
      </div>
      <div
        className={
          props.showCSS === true
            ? "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            : "w3-bar-item w3-button w3-padding-large w3-white"
        }
        onClick={props.setServicesPage}
      >
        Services
      </div>
      <div
        className={
          props.showCSS === true
            ? "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            : "w3-bar-item w3-button w3-padding-large w3-white"
        }
        onClick={props.setScrapDealerPage}
      >
        User registeration
      </div>
      <div
        className={
          props.showCSS === true
            ? "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            : "w3-bar-item w3-button w3-padding-large w3-white"
        }
        onClick={props.setCarOwnerPage}
      >
        
      </div>
      <div
        className={
          props.showCSS === true
            ? "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            : "w3-bar-item w3-button w3-padding-large w3-white"
        }
        onClick={props.setContactsPage}
      >
        Contacts
      </div>
    </Fragment>
  );
};

export default Nav_Page;
