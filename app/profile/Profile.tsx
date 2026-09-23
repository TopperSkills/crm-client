import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-[#263238] font-semibold text-sm">
          ACCOUNT
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
          My Profile
        </h1>

        <p className="text-gray-600 mt-2">
          View and manage your account information.
        </p>
      </div>


      {/* Profile Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <div className="flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] flex items-center justify-center">
              <span className="text-4xl text-[#263238] font-bold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#263238] mt-4">
              {user?.name || "User"}
            </h2>

            <p className="text-gray-500 mt-1">
              {user?.email || "user@example.com"}
            </p>

            {/* Role */}
            <span className="mt-4 px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#263238] text-sm font-semibold capitalize">
              {user?.role || "customer"}
            </span>

          </div>


          {/* Actions */}
          <div className="mt-8 space-y-3">

            <Link
              to="/profile/edit"
              className="
                block w-full text-center
                bg-[#263238]
                hover:bg-[#37474F]
                text-white
                font-semibold
                py-3
                rounded-lg
                transition
              "
            >
              Edit Profile
            </Link>

            <Link
              to="/change-password"
              className="
                block w-full text-center
                border border-[#263238]
                text-[#263238]
                hover:bg-[#E0F2F1]
                font-semibold
                py-3
                rounded-lg
                transition
              "
            >
              Change Password
            </Link>

          </div>

        </div>


        {/* User Information */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <h2 className="text-xl font-bold text-[#263238]">
            Personal Information
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Your account details
          </p>


          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name */}
            <div className="p-4 bg-[#E0F2F1] rounded-xl">
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="mt-1 font-semibold text-[#263238]">
                {user?.name || "Not available"}
              </p>
            </div>


            {/* Email */}
            <div className="p-4 bg-[#E8F5F3] rounded-xl">
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="mt-1 font-semibold text-[#263238] break-all">
                {user?.email || "Not available"}
              </p>
            </div>


            {/* Mobile */}
            <div className="p-4 bg-[#D9F0ED] rounded-xl">
              <p className="text-sm text-gray-500">
                Mobile Number
              </p>

              <p className="mt-1 font-semibold text-[#263238]">
                {user?.mobile || "Not available"}
              </p>
            </div>


            {/* Role */}
            <div className="p-4 bg-[#CCEBE7] rounded-xl">
              <p className="text-sm text-gray-500">
                Account Role
              </p>

              <p className="mt-1 font-semibold text-[#263238] capitalize">
                {user?.role || "Customer"}
              </p>
            </div>

          </div>


          {/* Account Status */}
          <div className="mt-8 pt-6 border-t border-[#B2DFDB]">

            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-[#263238]">
                  Account Status
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Your account is currently active.
                </p>
              </div>

              <span className="px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#263238] text-sm font-semibold">
                Active
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;