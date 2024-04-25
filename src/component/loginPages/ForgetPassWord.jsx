import { useState } from "react";
import "../../assets/sass/login.scss";
import "../../assets/sass/utility.scss";
import { Link } from "react-router-dom";

const ForgetPassWord = () => {
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
    <div className="login-page forget-page">
      <div className="cricel"></div>
      <div className=" login-form ">
        <div className="h">
          <h2>Forgot password?</h2>
          <h4>
            Enter the phone number you used when you created the account, and
            we’ll send you a code to reset your password
          </h4>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="number" className="sr-only">
              number
            </label>

            <div className="relative mt-7">
              <input
                type="text"
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-200  p-4 pe-12 text-sm shadow-sm"
                placeholder="+2012112321"
                name="number"
                value={formData.number}
                id="username"
                autoComplete="off"
              />
              {errors.number && <span className="valid">{errors.number}</span>}

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
            {/* <button className="blue">
              <Link to={"/verification-code"} className="reset">
                Sign in
              </Link>
            </button> */}

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#98B98C] px-5 py-3 text-sm font-medium text-white mt-7 mb-8"
            >
              <Link to={"/verification-code"}>Submit</Link>
            </button>
          </div>
          <div className="btn">
            <Link to={"/login"} className="d-block text-center ">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassWord;
