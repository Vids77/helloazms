import React, { Component, Fragment } from "react";
import "./App.css";
import ScrapDealerReg from "./Components/scrapdealer";
import UserReg from "./Components/UserReg";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Nav_Page from "./Components/Nav_Page";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: "Home",
      showCSS: true,
    };
    this.currentPage = this.currentPage.bind(this);
  }

  myFunction = () => {
    var x = document.getElementById("navDemo");
    if (x !== null) {
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
      this.setState({ showCSS: !this.state.showCSS });
    }
  };

  clickHomeFn = () => {
    this.setState({
      currPage: "Home",
    });
  };

  clickServicesFn = () => {
    this.setState({
      currPage: "Services",
    });
  };

  clickScrapDealerFn = () => {
    this.setState({
      currPage: "ScrapDealer Registration",
    });
  };

  clickCarOwnerFn = () => {
    this.setState({
      currPage: "User Registration",
    });
  };

  clickContactsFn = () => {
    this.setState({
      currPage: "Contacts",
    });
  };

  currentPage = () => {
    let element = <Fragment />;
    switch (this.state.currPage) {
      case "Home":
        element = <Home />;
        break;
      case "Services":
        element = <Services />;
        break;
      case "ScrapDealer Registration":
        element = <ScrapDealerReg />;
        break;
      case "User Registration":
        element = <UserReg />;
        break;
      case "Contacts":
        element = <Contacts />;
        break;
      default:
        element = <Home />;
    }
    return element;
  };
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-black w3-card w3-left-align w3-large">
            {this.state.showCSS === true ? (
              <Nav_Page
                showCSS={this.state.showCSS}
                myFunction={this.myFunction}
                setHomePage={this.clickHomeFn}
                setServicesPage={this.clickServicesFn}
                setScrapDealerPage={this.clickScrapDealerFn}
                setUserPage={this.clickCarOwnerFn}
                setContactsPage={this.clickContactsFn}
              />
            ) : (
              <Fragment />
            )}
          </div>
          {/* Navbar on small screens */}
          <div
            id="navDemo"
            className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"
          >
            <Nav_Page
              myFunction={this.myFunction}
              setHomePage={this.clickHomeFn}
              setServicesPage={this.clickServicesFn}
              setScrapDealerPage={this.clickScrapDealerFn}
              setCarOwnerPage={this.clickCarOwnerFn}
              setContactsPage={this.clickContactsFn}
            />
          </div>
        </div>
        {this.currentPage()}
      </div>
    );
  }
}
export default App;
