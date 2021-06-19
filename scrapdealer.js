import React, { Component } from "react";
import "./CSS/todo.css";

class ScrapDealerReg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      branch: "",
      contactNumber: "",
      aadharNumber: "",
      password: "",
      permits: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  namehandler = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  centerhandler = (event) => {
    this.setState({
      centerName: event.target.value,
    });
  };
  locationhandler = (event) => {
    this.setState({
      location: event.target.value,
    });
  };
  contacthandler = (event) => {
    this.setState({
      contactNumber: event.target.value,
    });
  };
  licensehandler = (event) => {
    this.setState({
      aadharNumber: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  permithandler = (event) => {
    this.setState({
      permits: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.Name}  Registered Successfully !!!!`);
    console.log(this.state);
    this.setState({
      name: "",
      branchName: "",
      location: "",
      contactNumber: "",
      aadharNumber: "",
      password: "",

      permits: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div
        className="w3-container w3-blue w3-center"
        style={{ padding: "128px 16px" }}
      >
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>Name :</label>{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={this.namehandler}
            placeholder="Name"
          />
          <br />
          <label>BranchName :</label>{" "}
          <input
            type="text"
            value={this.state.centerName}
            onChange={this.centerhandler}
            placeholder="CenterName"
          />
          <br />
          <label>Location :</label>{" "}
          <input
            type="text"
            value={this.state.location}
            onChange={this.locationhandler}
            placeholder="Location"
          />
          <br />
          <label>ContactNumber :</label>{" "}
          <input
            type="text"
            value={this.state.contactNumber}
            onChange={this.contacthandler}
            placeholder="ContactNumber"
          />
          <br />
          <label>AadharNumber :</label>{" "}
          <input
            type="text"
            value={this.state.licenseNumber}
            onChange={this.licensehandler}
            placeholder="LicenseNumber"
          />
          <br />
          <label>Password :</label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password"
          />
          <br />
          <label>Permits :</label>
          <select onChange={this.permithandler} defaultValue="Select">
            <option defaultValue>Select </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ScrapDealerReg;
