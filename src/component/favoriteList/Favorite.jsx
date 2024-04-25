

const FavoritePage = () => {
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
                User Fav Id
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                User Id
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Id
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Sub Category
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
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
                31
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">15</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Sewing Machine
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                400 LE
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Embroidery
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Sewing
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                1 Jan 2024
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="inline-flex rounded-lg p-1">
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
                2
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                55
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">12</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Sewing Machine
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                700 LE
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Embroidery
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Sewing
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                5 Jan 2024
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="inline-flex rounded-lg p-1">
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

export default FavoritePage;
