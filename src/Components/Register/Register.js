import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  onFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  onLastNameChange = (e) => {
    this.setState({ lastname: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:15432/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.signInEmail,
          password: this.state.signInPassword,
        }),
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.onFirstNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={this.onLastNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
