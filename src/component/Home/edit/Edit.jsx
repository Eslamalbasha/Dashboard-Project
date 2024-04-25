import avatar from "../../../assets/images/upload avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div style={{ backgroundColor: "#F8F3F3", height: "1250px" }}>
      <div>
        <div>
          <div>
            <p> Editing</p>
            <div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "-100px",
                }}
              >
                <div>
                  <img src={avatar} />
                </div>
                <div>
                  <img src={avatar} />
                </div>
                <div>
                  <img src={avatar} />
                </div>
              </div>
              <div>
                <input id="image" placeholder="" type="file" name="image" />
                <label htmlFor="image">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    style={{
                      color: "#3B4758",
                    }}
                  />
                </label>{" "}
                <input
                  id="image"
                  placeholder=""
                  type="file"
                  name="image"
                  // onChange={handleFileChange}
                />
                <label htmlFor="image">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    style={{ color: "#3B4758" }}
                  />
                </label>{" "}
                <input
                  id="image"
                  placeholder=""
                  type="file"
                  name="image"
                  // onChange={handleFileChange}
                />
                <label htmlFor="image">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    style={{ color: "#3B4758" }}
                  />
                </label>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="row col-9 "
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <div
              className="input-holder col-md-6 col-12"
              style={{ display: "flex" }}
            >
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                Full Name:
              </label>
              <input
                placeholder=""
                type="text"
                name="name"
                // value={formData?.name}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Business Name:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                // value={formData?.mother_name}
                name="mother_name"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Business Type:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                // value={formData?.father_name}
                name="father_name"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Email Address:
              </label>
              <input
                type="email"
                name="email address"
                // value={formData?.country_of_origin}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Password:
              </label>
              <input
                // value={formData?.age}
                type="password"
                name="password"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Phone Number:
              </label>
              <input
                // value={formData?.age}
                type="text"
                name="number"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Registration Date:
              </label>
              <input
                // value={formData?.age}
                type="Date"
                name="Date"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                Status:
              </label>
              <select
                // value={formData?.gender}
                name="status"
                id=""
                // onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="0">Approved</option>
                <option value="1">Pended</option>
                <option value="1">rejected</option>
              </select>
            </div>

            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Business Address:
              </label>
              <input
                // value={formData?.breed}
                type="text"
                name="address"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                  marginRight: "10px",
                }}
              >
                {" "}
                National ID Number:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="national-id-number"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                TAX ID:
              </label>
              <input
                placeholder=""
                type="text"
                name="tax-id:"
                // value={formData?.name}
                // onChange={handleInputChange}
              />
            </div>
          </div>

          {/*
         
         
         
         */}
          <div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                  marginRight: "10px",
                }}
              >
                {" "}
                Social Media Profile Link 1:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                // value={formData?.mother_name}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Social Media Profile Link 2:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                // value={formData?.father_name}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                Type Of Product:
              </label>
              <input
                type="text"
                name="type-of-product"
                // value={formData?.country_of_origin}
                // onChange={handleInputChange}
              />
            </div>

            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Payment Type:
              </label>
              <input
                // value={formData?.age}
                type="email"
                name="email"
                // onChange={handleInputChange}
              />
            </div>

            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Product Description:
              </label>
              <input
                // value={formData?.breed}
                type="password"
                name="Product Description:"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Pricing Information:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="Pricing Information:"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                Registration Date:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="registration-date"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Shipping Methods:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="shipping-methods"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Shipping Costs:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name=" shipping-costs"
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#3B4758",
                }}
              >
                {" "}
                Estimated Delivery Time:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="estimated-delivery-time"
                // onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div>
          <Link
            style={{
              backgroundColor: "#98B98C",
              borderRadius: "8px",
              color: "#FDFDFD",
              padding: "15px 20px",
              fontSize: "20px",
              marginLeft: "900px",
              marginRight: "40px",
            }}
          >
            Cancel
          </Link>
          <Link
            style={{
              backgroundColor: "#98B98C",
              borderRadius: "8px",
              color: "#FDFDFD",
              padding: "15px 20px",
              fontSize: "20px",
            }}
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
