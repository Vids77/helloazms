import React, { Component } from "react";
import "./CSS/todo.css";

class UserReg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      aadharNumber: "",
      registrationNumber: "",
      dealerNumber: "",
      password: "",
      permits: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  aadharhandler = (event) => {
    this.setState({
      aadharNumber: event.target.value,
    });
  };
  registrationhandler = (event) => {
    this.setState({
      registrationNumber: event.target.value,
    });
  };
  dealerhandler = (event) => {
    this.setState({
      dealerNumber: event.target.value,
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
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      name: "",
      aadharNumber: "",
      registrationNumber: "",
      dealerNumber: "",
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
          <div>
            <label>Name :</label>{" "}
            <input
              type="text"
              value={this.state.name}
              onChange={this.namehandler}
              placeholder="Name"
            />
            <br />
            <label>AadharNumber :</label>{" "}
            <input
              type="text"
              value={this.state.aadharNumber}
              onChange={this.aadharhandler}
              placeholder="AadharNumber"
            />
            <br />
            <label>RegistrationNumber :</label>{" "}
            <input
              type="text"
              value={this.state.registrationNumber}
              onChange={this.registrationhandler}
              placeholder="RegistrationNumber"
            />
            <br />
            <label>DealerNumber :</label>{" "}
            <input
              type="text"
              value={this.state.dealerNumber}
              onChange={this.dealerhandler}
              placeholder="DealerNumber"
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
          </div>
        </form>
      </div>
    );
  }
}

export default UserReg;
