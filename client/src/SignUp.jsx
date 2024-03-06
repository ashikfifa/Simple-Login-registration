import { useState } from "react";
import { Link } from "react-router-dom";
import { signUpApi } from "./api-common/api-common-file.js";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const formOnSubmit = async (e) => {
    e.preventDefault();
    let payload;

    payload = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const result = await signUpApi(payload);

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={(e) => formOnSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={handlePassChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block">
                    Register
                  </button>
                </form>
                Already have an account
                <Link to="/"> Log in </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
