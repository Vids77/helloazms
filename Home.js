import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <header
        className="w3-container w3-blue w3-center"
        style={{ padding: "128px 16px" }}
      >
        <h1 className="w3-margin w3-jumbo">BankingBLOCK</h1>
        <p className="w3-xlarge">Initiative for best banking experience</p>
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">
          Get Started
        </button>
      </header>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird">
            <h1>WELCOME TO BankingBLOCK!</h1>
            <p className="w3-text-grey">
              Come have a hassle free banking....
            </p>
          </div>
          <div className="w3-third w3-center">
            <i className="fa fa-anchor w3-padding-64 w3-text-red" />
          </div>
        </div>
      </div>
      {/* Second Grid */}
      <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
            <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right" />
          </div>
          <div className="w3-twothird">
            <h1>BankingBLOCK</h1>
            <h5 className="w3-padding-32">Start something that matters.</h5>
            <p className="w3-text-grey">
              A blockchain based novel system to facilitate
              easy and safe Banking experience. .
            </p>
          </div>
        </div>
      </div>
      <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 className="w3-margin w3-xlarge">Start something that matters</h1>
      </div>
      {/* Footer */}
      <footer className="w3-container w3-padding-64 w3-center w3-opacity">
        <div className="w3-xlarge w3-padding-32">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
        </div>
        <p>
          Powered by{" "}
          <a href="https://www.scrapnet.com/w3css/default.asp" target="_blank">
            bankingblock
          </a>
        </p>
      </footer>
    </Fragment>
  );
};

export default Home;
