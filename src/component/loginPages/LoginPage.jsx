import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "../../assets/sass/login.scss";
import "../../assets/sass/utility.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationError = {};
    if (!formData.email.trim()) {
      validationError.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = "email is not validation";
    }
    if (!formData.password.trim()) {
      validationError.password = "password is required";
    } else if (formData.password.length < 6) {
      validationError.password = "password should be at least 6 char";
    }
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      alert("Form Submitted Successfully");
    }
  };
  return (
    <div className="login-page">
      <div className="cricel"></div>

      <div
        style={{ width: "500px" }}
        className=" px-6 py-16 sm:px-6 lg:px-8 absolute top-1 left-96  "
      >
        <div className="mx-auto max-w-lg bg-slate-50 ">
          <div className="img-holder">
            <img src={logo} alt="" />
          </div>
          <form
            action="#"
            onSubmit={onSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  id="username"
                  autoComplete="off"
                />
                {errors.email && <span className="valid">{errors.email}</span>}

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  id="password"
                />
                {errors.password && (
                  <span className="valid">{errors.password}</span>
                )}

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 justify-between flex pt-7 pb-7">
              <div>
                <input type="radio" id="rember-me" />

                <label htmlFor="rember-me" className="rember-me">
                  Remember me
                </label>
              </div>
              <Link to={"/forget-password"} className="d-block text-center">
                Forgot password?
              </Link>
            </p>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#98B98C] px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
