import { useState } from "react";

import "../../assets/sass/login.scss";
import "../../assets/sass/utility.scss";
import { Link } from "react-router-dom";

const ResetPass = () => {
  const [formData, setFormData] = useState({
    number: "",
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

    if (!formData.password.trim()) {
      validationError.number = "number is required";
    } else if (formData.number.length < 6) {
      validationError.number = "password should be at least 6 char";
    }
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="reset-page login-page">
      <div className="cricel"></div>
      <div
        style={{ width: "500px" }}
        className=" px-6 py-20 sm:px-6 lg:px-8 absolute top-1 left-96 "
      >
        <div className="mx-auto max-w-lg bg-slate-50">
          <form
            action="#"
            onSubmit={onSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Reset Password</p>

            <div>
              <label htmlFor="email" className="sr-only">
                password
              </label>

              <div className="relative">
                <input
                  type="password"
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="New Password"
                  name="password"
                  value={formData.password}
                  id="username"
                  autoComplete="off"
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
                  placeholder="Confirm Password"
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

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#98B98C] px-5 py-3 text-sm font-medium text-white"
            >
              Reset Password
            </button>
            <Link
              to={"/forget-password"}
              className="  text-sm text-[#98B98C]  flex  pt-7 pb-1 ml-32"
            >
              Back to Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
//  <div className=" reset-form">
//    <div className="h">
//      <h2>Reset Password</h2>
//    </div>
//    <form onSubmit={onSubmit}>
//      <div>
//        <div className="input-holder">
//          <label htmlFor="password" className="input">
//            New Password{" "}
//          </label>
//          <input
//            onChange={handleInputChange}
//            placeholder="Password"
//            name="password"
//            type="password"
//            value={formData.password}
//            id="password"
//          />
//          {errors.password && <span className="valid">{errors.password}</span>}
//        </div>
//        <div className="input-holder">
//          <label htmlFor="password" className="input">
//            Confirm Password{" "}
//          </label>
//          <input
//            onChange={handleInputChange}
//            placeholder="Password"
//            name="password"
//            type="password"
//            value={formData.password}
//            id="password"
//          />
//          {errors.password && <span className="valid">{errors.password}</span>}
//        </div>
//      </div>
//      <div className="btn-holder my-4">
//        <button className="blue">
//          <Link to={"/change-successful"} className="reset">
//            Reset Password
//          </Link>
//        </button>
//      </div>
//      <div className="btn">
//        <a className="d-block text-center" href="/login">
//          Back to Sign In
//        </a>
//      </div>
//    </form>
//  </div>;
