import "../../assets/sass/login.scss";
import "../../assets/sass/utility.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const ChangeSuccessful = () => {
  return (
    <div className="login-page forget-page changpass-page">
      <div className="cricel"></div>
      <div className=" login-form">
        <div className="icon-page">
          <FontAwesomeIcon icon={faCheckDouble} className="icon" />
        </div>
        <h2 style={{ textAlign: "center" }}>
          Password changed
          <br />
          Successfully!
        </h2>
      </div>
    </div>
  );
};

export default ChangeSuccessful;
