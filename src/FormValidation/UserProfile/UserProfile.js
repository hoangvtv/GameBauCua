import React, { Component } from "react";
import Swal from "sweetalert2";
import "./UserProfile.css";
class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (e) => {
    let { name, value, type } = e.target;

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = `${name} is required`;
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        //Nếu email không hợp lệ
        newErrors[name] = name + "is invalid !";
      } else {
        newErrors[name] = ""; //Nếu email hợp lệ
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues["password"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = "Password is not match";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });

    // this.setState({
    //   values: {
    //     ...this.state.values,
    //     [name]: value,
    //   },
    // });

    // if (value === "") {
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       [name]: "This field is required",
    //     },
    //   });
    // } else {
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       [name]: "",
    //     },
    //   });
    // }

    console.log(this.state);
  };
  handleSubmit = (e) => {
    //Cản trình duyệt submit reload lại trang
    e.preventDefault();

    //xét điều kiện khi submit
    let { values, errors } = this.state;

    let isValid = true;
    let profileContent = "";
    let errorsContent = "";
    for (let key in values) {
      if (values[key] === "") {
        isValid = false;
        errorsContent += `
                <p class="text-center"> <b class="text-danger text-center">${key} is invalid!</b></p>`;
        isValid = false;
      }

      profileContent += `
                <p class="text-center"> <b>${key}:</b> ${values[key]}</p>
            `;
    }
    for (let i in values) {
      if (values[i] === "") {
        isValid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorsContent += `
        <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
        isValid = false;
      }
    }

    if (!isValid) {
      Swal.fire({
        title: "Your profile!",
        html: errorsContent,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
      return;
    } else {
      Swal.fire({
        title: "Your profile!",
        html: profileContent,
        icon: "success", //success, error, warning, question
        confirmButtonText: "OK",
      });
    }
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          className="bg-white p-5 m-5"
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
        >
          <h1 className="text-center mt-0">User Profile</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>FirstName</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>LastName</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>UserName</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.email}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.password}
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passwordConfirm}
                  type="password"
                  name="passwordConfirm"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>PasswordConfirm</label>
                <span className="text text-danger">
                  {" "}
                  {this.state.errors.passwordConfirm}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn text-white bg-dark w-100 col-12"
              style={{ fontSize: 25 }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfile;
