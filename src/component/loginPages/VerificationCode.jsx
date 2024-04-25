// import OtpInput from "react-otp-input";
import "../../assets/sass/login.scss";
import "../../assets/sass/utility.scss";
// import { useState } from "react";
import { Link } from "react-router-dom";

const VerificationCode = () => {
  //   const [otp, setOtp] = useState("");

  return (
    <div className="login-page forget-page  otp-page">
      <div className="cricel"></div>
      <div className=" login-form otp-card">
        <div className="h">
          <h2>Validate code</h2>
          <h4>Enter below the 6-digit code you received via SMS</h4>
        </div>
        {/* <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="otp"
        ></OtpInput> */}
        <div className="otp-card-inputs">
          <input type="text" maxLength="1" autoFocus />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />{" "}
        </div>
        <div>
          {/* <button className="blue">
            <Link to={"/change-successful"} className="reset">
              Validate code
            </Link>
          </button> */}
          <button
            type="submit"
            className="block w-full rounded-lg bg-[#98B98C] px-5 py-3 text-sm font-medium text-white mt-7 mb-8"
          >
            <Link to={"/change-successful"}>Validate code</Link>
          </button>
        </div>
        <div className="btn">
          <a className="d-block text-center" href="/login">
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
