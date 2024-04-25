import avatar from "../../../assets/icons/avater1.svg";

const ViewDetalisPage = () => {
  return (
    <div style={{ backgroundColor: "#F8F3F3", height: "900px" }}>
      <div>
        <div>
          <div>
            <p className="absolute top-10 left-52 text-4xl "> View Detalis</p>
            <div>
              <div className="flex justify-center    ">
                <div>
                  <img src={avatar} className=" mr-4 mt-5 mb-7 w-28" />
                </div>
                <div>
                  <img src={avatar} className=" mr-4 mt-5  mb-7 w-28" />
                </div>
                <div>
                  <img src={avatar} className=" mr-4 mt-5 mb-7 w-28" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row col-9 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>
            <div
              className="input-holder col-md-6 col-12 mt-1"
              style={{ display: "flex" }}
            >
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
              />
            </div>
            <div className="input-holder  ">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
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
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Registration Date:
              </label>
              <input
                // value={formData?.age}
                type="Date"
                name="Date"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                }}
              >
                Status:
              </label>
              <select
                // value={formData?.gender}
                name="status"
                id=""
                style={{ width: "150px", height: "20px", marginRight: "120px" }}

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
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Business Address:
              </label>
              <input
                // value={formData?.breed}
                type="text"
                name="address"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                National ID Number:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="national-id-number"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                TAX ID:
              </label>
              <input
                placeholder=""
                type="text"
                name="tax-id:"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

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
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Social Media Profile Link 1:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // value={formData?.mother_name}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Social Media Profile Link 2:
              </label>
              <input
                placeholder=""
                type="text"
                id=""
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // value={formData?.father_name}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                Type Of Product:
              </label>
              <input
                type="text"
                name="type-of-product"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // value={formData?.country_of_origin}
                // onChange={handleInputChange}
              />
            </div>

            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Payment Type:
              </label>
              <input
                // value={formData?.age}
                type="email"
                name="email"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>

            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Product Description:
              </label>
              <input
                // value={formData?.breed}
                type="password"
                name="Product Description:"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Pricing Information:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="Pricing Information:"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                Registration Date:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="registration-date"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Shipping Methods:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="shipping-methods"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Shipping Costs:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name=" shipping-costs"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3B4758",
                  marginRight: "5px",
                }}
              >
                {" "}
                Estimated Delivery Time:
              </label>
              <input
                // value={formData?.hourse_place}
                type="text"
                name="estimated-delivery-time"
                style={{ width: "150px", height: "8px", marginRight: "120px" }}

                // onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetalisPage;
