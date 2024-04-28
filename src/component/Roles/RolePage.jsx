import "../../../src/assets/sass/pages.scss";

const RolePage = () => {
  return (
    <div className=" RolePage flow-root">
      <h1 className="title">Role Permissions</h1>
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">User</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Service Provider</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Categories</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 mr-24 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Sub Categories</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>

            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 mr-24 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Sub Categories</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Products</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Orders</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Cancelled Orders</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 mr-48">
              <input type="checkbox" className="mr-2 " />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Cart Items</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 mr-48">
              <input type="checkbox" className="mr-2 " />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Reviews</dt>

          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 mr-24 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Contact us</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Static pages</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-[#586A84]">Favorite List</dt>
          <div className="justify-between flex text-md">
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Read
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              View
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Edit
            </dd>
            <dd className="text-[#586A84] sm:col-span-2 ">
              <input type="checkbox" name="Read " className="mr-2" />
              Delete
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default RolePage;
