import { Link } from "react-router-dom";
import "../../../assets/sass/pages.scss";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import avatar from "../../../assets/icons/avater.svg";
import avatar1 from "../../../assets/icons/avater1.svg";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  function openModalEdit() {
    setIsOpenEdit(true);
  }
  function closeModalView() {
    setIsOpenView(false);
  }

  function openModalView() {
    setIsOpenView(true);
  }

  return (
    <div className="table">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className=" bg-[#CBDAC6] h-14 text-center">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                Full Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email Address
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Business Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Business Type
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
                Eslam Albasha
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                eslam@gmail.com
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Westor
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Small business
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p className="btn-styel approved">Approved</p>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="inline-flex rounded-lg p-1">
                  <div>
                    <Link
                      onClick={openModalEdit}
                      className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#5FAE92] hover:text-gray-700 focus:relative"
                    >
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
                    <Transition appear show={isOpenEdit} as={Fragment}>
                      <Dialog
                        as="div"
                        style={{ zIndex: 10 }}
                        className="relative"
                        onClose={closeModalEdit}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel
                                style={{ height: "690px" }}
                                className="  transform overflow-hidden rounded-2xl bg-[#F8F3F3] p-6 text-left align-middle shadow-xl transition-all"
                              >
                                <div className="editpage">
                                  <div>
                                    <div>
                                      <div>
                                        <p className="absolute top-10 left-10 text-4xl ">
                                          {" "}
                                          Editing
                                        </p>
                                        <div>
                                          <div className="flex justify-center    ">
                                            <div>
                                              <img
                                                src={avatar}
                                                className=" mr-4  mb-4 w-28"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                src={avatar}
                                                className=" mr-4   mb-5 w-28"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                src={avatar}
                                                className=" mr-4  mb-5 w-28"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-input row ml-20 ">
                                      <div>
                                        <div
                                          className="input-holder col-md-6 col-12 mt-1"
                                          style={{ display: "flex" }}
                                        >
                                          <label htmlFor="">Full Name:</label>
                                          <input
                                            placeholder=""
                                            type="text"
                                            name="name"
                                            // value={formData?.name}
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder  ">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor=""> Password:</label>
                                          <input
                                            // value={formData?.age}
                                            type="password"
                                            name="password"
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder col-md-6 col-12">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">Status:</label>
                                          <select
                                            // value={formData?.gender}
                                            name="status"
                                            id=""
                                            style={{
                                              width: "150px",
                                              height: "20px",
                                              marginRight: "120px",
                                            }}

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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor=""> TAX ID:</label>
                                          <input
                                            placeholder=""
                                            type="text"
                                            name="tax-id:"

                                            // value={formData?.name}
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                      </div>

                                      <div>
                                        <div className="input-holder ">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
                                            {" "}
                                            Shipping Costs:
                                          </label>
                                          <input
                                            // value={formData?.hourse_place}
                                            type="text"

                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder col-md-6 col-12">
                                          <label htmlFor="">
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

                                        <div className="mt-10 flex justify-center">
                                          <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent   bg-[#98B98C] px-6 py-2 text-sm font-medium text-[#FDFDFD] mr-4 "
                                            onClick={closeModal}
                                          >
                                            Save
                                          </button>
                                          <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-[#98B98C] px-6 py-2 text-sm font-medium text-[#FDFDFD] "
                                            onClick={closeModal}
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                  <div>
                    <Link
                      onClick={openModalView}
                      className="inline-flex items-center gap-1 rounded-md  px-2 py-1 text-sm text-[#007EF2] hover:text-gray-700 focus:relative"
                    >
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
                    </Link>
                    <Transition appear show={isOpenView} as={Fragment}>
                      <Dialog
                        as="div"
                        style={{ zIndex: 10 }}
                        className="relative"
                        onClose={closeModalView}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel
                                style={{ height: "690px" }}
                                className="  transform overflow-hidden rounded-2xl bg-[#F8F3F3] p-6 text-left align-middle shadow-xl transition-all"
                              >
                                <div className="editpage">
                                  <div>
                                    <div>
                                      <div>
                                        <p className="absolute top-10 left-10 text-4xl ">
                                          {" "}
                                          View Details
                                        </p>
                                        <div>
                                          <div className="flex justify-center    ">
                                            <div>
                                              <img
                                                src={avatar1}
                                                className=" mr-4  mb-4 w-28"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                src={avatar1}
                                                className=" mr-4   mb-5 w-28"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                src={avatar1}
                                                className=" mr-4  mb-5 w-28"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-input row ml-20 ">
                                      <div>
                                        <div
                                          className="input-holder col-md-6 col-12 mt-1"
                                          style={{ display: "flex" }}
                                        >
                                          <label htmlFor="">Full Name:</label>
                                          <input
                                            placeholder=""
                                            type="text"
                                            name="name"
                                            // value={formData?.name}
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder  ">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor=""> Password:</label>
                                          <input
                                            // value={formData?.age}
                                            type="password"
                                            name="password"
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder col-md-6 col-12">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">Status:</label>
                                          <select
                                            // value={formData?.gender}
                                            name="status"
                                            id=""
                                            style={{
                                              width: "150px",
                                              height: "20px",
                                              marginRight: "120px",
                                            }}

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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor=""> TAX ID:</label>
                                          <input
                                            placeholder=""
                                            type="text"
                                            name="tax-id:"

                                            // value={formData?.name}
                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                      </div>

                                      <div>
                                        <div className="input-holder ">
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
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
                                          <label htmlFor="">
                                            {" "}
                                            Shipping Costs:
                                          </label>
                                          <input
                                            // value={formData?.hourse_place}
                                            type="text"

                                            // onChange={handleInputChange}
                                          />
                                        </div>
                                        <div className="input-holder col-md-6 col-12">
                                          <label htmlFor="">
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
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>

                  <div>
                    <Link
                      // to="/remove"
                      onClick={openModal}
                      type="button"
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-[#FF3C5F] "
                    >
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
                    </Link>
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-[#F8F3F3] border border-spacing-96 border-[#98B98C] p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                  as="h3"
                                  className=" font-medium leading-6 text-gray-900 text-center text-2xl"
                                >
                                  Confirmation
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-base text-gray-500 text-center mt-4 mb-4">
                                    Are you sure you want to remove this user ?
                                  </p>
                                </div>

                                <div className="mt-10 flex justify-center">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent   bg-[#ffffff] px-6 py-2 text-sm font-medium text-[#3B4758] mr-4 "
                                    onClick={closeModal}
                                  >
                                    Yas
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-[#98B98C] px-6 py-2 text-sm font-medium text-[#3B4758] "
                                    onClick={closeModal}
                                  >
                                    No
                                  </button>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          {/* <tbody className="divide-y divide-gray-200  text-center ">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Esraa ALi
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                earaa@gmail.com
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Westor
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Small business
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p className="btn-styel pended">pended</p>
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
                Mohamed Omar
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                mohamed@gmail.com
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Westor
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Small business
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p className="btn-styel rejected">Rejected</p>
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
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Table;
