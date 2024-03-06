import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "./api-common/api-common-file";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload;

    payload = {
      email: email,
      password: password,
    };
    try {
      const result = await loginApi(payload);

      if (result.data === "Success") {
        console.log('666666666666');
        navigate("/dashboard");
      }
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
                <h2 className="text-center mb-4">Log in page</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
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
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                Don't have an account
                <Link to="/register"> Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
