const Delete = () => {
  return (
    <div
      style={{ width: "430px", position: "absolute", top: "35%", left: "32%" }}
      className="  rounded-2xl border  border-[#98B98C] bg-[#F8F3F3]  shadow-lg sm:p-6 lg:p-8
      
       "
      role="alert"
    >
      <div className="flex items-center gap-4 ">
        <p className="font-medium sm:text-lg  ">Confirmation</p>
      </div>

      <p className="mt-4 text-gray-500">
        Are you sure you want to remove this user ?
      </p>

      <div className="mt-6 sm:flex sm:gap-4 ">
        <a
          className="inline-block w-full rounded-lg bg-[#FDFDFD] px-9 py-3 text-center text-sm font-semibold text-[#3B4758] sm:w-auto"
          href="#"
        >
          Yas
        </a>

        <a
          className="mt-2 inline-block w-full rounded-lg bg-[#98B98C] px-9 py-3 text-center text-sm font-semibold text-[#FFFAFA] sm:mt-0 sm:w-auto"
          href="#"
        >
          No
        </a>
      </div>
    </div>
  );
};

export default Delete;
