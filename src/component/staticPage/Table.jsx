import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "../../assets/css/Table.css";
// eslint-disable-next-line react/prop-types
export const Table = ({ rows, deleteRow, editRow }) => {
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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Page
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200  text-center ">
            {/* eslint-disable-next-line react/prop-types */}
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <tr key={idx} className="odd:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {row.page}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {row.description}
                  </td>
                  <td>
                    <span
                      className={`whitespace-nowrap px-4 py-1 label label-${row.status}`}
                    >
                      {statusText}
                    </span>
                  </td>
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
