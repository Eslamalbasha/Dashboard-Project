import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "../../../assets/sass/utility.scss";
// import UserPage from "../../user/UserPage";
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "207px",
          background: "#98B98C",
          height: "80px",
          width: "1136px",
          zIndex: "22",
        }}
      >
        <div className="relative mt-4 w-60 left-96">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>

          <input
            type="text"
            id="Search"
            placeholder="    Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <div className="flex  w-52 flex-col justify-between border-e bg-[#98B98C] ">
        <div>
          <div className="inline-flex size-32 items-center justify-center">
            <img
              src={logo}
              alt=""
              style={{
                filter: " brightness(140%)",
                width: "120px",
                //   marginLeft: "20px",
                left: "30px",
                position: "absolute",
              }}
            />
          </div>

          <div className="nav border-t border-gray-100">
            <div className="px-2">
              <div className="nav py-4">
                <NavLink
                  to="/"
                  style={{
                    padding: "10px",
                    justifyContent: "space-around",
                    fontWeight: "600",
                    color: "#3B4758",
                  }}
                  className="t group relative flex justify-center rounded bg-[#DFFAD5] px-2 py-1.5 text-[#3B4758]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-5 py-2.5 text-xs font-medium text-white group-hover:visible z-10 ">
                    Dashboard
                  </span>
                  Dashboard
                </NavLink>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <NavLink
                    to="/users"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-15px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    user
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      User
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/role"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-15px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Roles
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Roles
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/service"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "1px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "700 ",
                        marginLeft: "-20px",
                      }}
                    >
                      Service Provider
                    </p>
                    <span className="invisible absolute w-28 start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Service Provider
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/categories"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <p>Categories</p>

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Categories
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/subcategiesPage"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p style={{ marginLeft: "-25px" }}>Sub Categories</p>

                    <span className="invisible absolute w-28 start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Sub Categories
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/product"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-5px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <p>Products</p>

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Products
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Orders
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Orders
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cancelled"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "700 ",
                        marginLeft: "-20px",
                      }}
                    >
                      Cancelled Orders
                    </p>
                    <span className="invisible absolute w-28 start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Cancelled Orders
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cartitem"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p style={{ marginLeft: "-30px" }}>Cart Items</p>

                    <span className="invisible w-20 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Cart Items
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/revies"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-5px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Reviews
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Reviews
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "3px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Contact us
                    <span className="invisible w-20 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Contact us
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/static"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "4px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <p>Static pages</p>

                    <span className="invisible w-24 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Static pages
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorite"
                    style={{
                      padding: "10px",
                      justifyContent: "space-around",
                      fontWeight: "600",
                      color: "#3B4758",
                    }}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-[#FDFDFD] bg-[#FDFDFD] hover:bg-[#DFFAD5] hover:text-gray-700 mb-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginLeft: "-5px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p style={{ marginLeft: "-30px" }}>Favorite List</p>

                    <span className="invisible w-24 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-[#98B98C] px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                      Favorite List
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
