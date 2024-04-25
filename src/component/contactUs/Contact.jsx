import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "207px",
        width: "1136px",
      }}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className=" bg-[#CBDAC6] h-14 text-center">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Request Id
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                User Id
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Subject
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date submitted
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200  text-center ">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                1
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                16
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                eslam@gmail.com
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Order inquiry
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                1 Dec 2023 10:00 pm
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p
                  style={{
                    background: "#DCF6E8",
                    color: "#28C76F",
                    fontWeight: "600",
                    borderRadius: "10px",
                    padding: "5px 1px",
                    textAlign: "center",
                  }}
                >
                  Solved
                </p>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="inline-flex rounded-lg p-1">
                  <Link className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#5FAE92] hover:text-gray-700 focus:relative">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#007EF2] hover:text-gray-700 focus:relative">
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>

                  <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-[#FF3C5F] ">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody className="divide-y divide-gray-200  text-center ">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                11
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                26
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                earaa@gmail.com
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Account issue
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                10 Nov 2023 3:00 pm
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p
                  style={{
                    background: "#EBF2FB",
                    color: "#4891F9",
                    fontWeight: "600",
                    borderRadius: "10px",
                    padding: "5px 1px",
                    textAlign: "center",
                  }}
                >
                  In Progress
                </p>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="inline-flex rounded-lg p-1">
                  <Link className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#5FAE92] hover:text-gray-700 focus:relative">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#007EF2] hover:text-gray-700 focus:relative">
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>

                  <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-[#FF3C5F] ">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;
