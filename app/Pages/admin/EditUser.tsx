import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

type EditUserFormData = {
  name: string;
  email: string;
  mobile: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
};

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
  joinedDate: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    role: "customer",
    status: "active",
    joinedDate: "20 Sep 2026",
  },
  {
    id: 2,
    name: "Sneha Patil",
    email: "sneha@gmail.com",
    mobile: "9876543211",
    role: "customer",
    status: "active",
    joinedDate: "19 Sep 2026",
  },
  {
    id: 3,
    name: "Amit Joshi",
    email: "amit@gmail.com",
    mobile: "9876543212",
    role: "customer",
    status: "inactive",
    joinedDate: "18 Sep 2026",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@crm.com",
    mobile: "9876543213",
    role: "admin",
    status: "active",
    joinedDate: "15 Sep 2026",
  },
];

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const userId = Number(id);

  const user = users.find((user) => user.id === userId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserFormData>();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        status: user.status,
      });
    }
  }, [user, reset]);

  const onSubmit = (data: EditUserFormData) => {
    console.log("Updated User Data:", {
      id: userId,
      ...data,
    });

    navigate("/admin/users");
  };

  if (!user) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-4xl">
            🔍
          </div>

          <h1 className="text-2xl font-bold text-[#263238] mt-5">
            User Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The user you are trying to edit does not exist.
          </p>

          <Link
            to="/admin/users"
            className="inline-block mt-6 bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-[#263238] uppercase">
          Admin Panel
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
          Edit User
        </h1>

        <p className="text-gray-600 mt-2">
          Update user account information.
        </p>
      </div>

      {/* User Summary */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] text-[#263238] flex items-center justify-center text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#263238]">
              {user.name}
            </h2>

            <p className="text-sm text-gray-500">
              User ID: {user.id}
            </p>
          </div>

          <div className="sm:ml-auto">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                user.role === "admin"
                  ? "bg-[#D9F0ED] text-[#263238]"
                  : "bg-[#E0F2F1] text-[#263238]"
              }`}
            >
              {user.role}
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 sm:p-8">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-bold text-[#263238]">
              Personal Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Update the user's personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Mobile Number
              </label>

              <input
                id="mobile"
                type="tel"
                maxLength={10}
                placeholder="Enter 10 digit mobile number"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10 digit mobile number",
                  },
                })}
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
          </div>

          {/* Account Settings */}
          <div className="pt-4 border-t border-[#B2DFDB]">
            <h2 className="text-xl font-bold text-[#263238]">
              Account Settings
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Update role and account status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Role
              </label>

              <select
                id="role"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("role", {
                  required: "Role is required",
                })}
              >
                <option value="customer">
                  Customer
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>

              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Status
              </label>

              <select
                id="status"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("status", {
                  required: "Status is required",
                })}
              >
                <option value="active">
                  Active
                </option>

                <option value="inactive">
                  Inactive
                </option>
              </select>

              {errors.status && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>

          {/* Joined Date */}
          <div className="pt-4 border-t border-[#B2DFDB]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <div>
                <p className="text-sm text-gray-500">
                  Joined Date
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {user.joinedDate}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  User ID
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  #{user.id}
                </p>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#B2DFDB]">

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Save Changes
            </button>

            <Link
              to="/admin/users"
              className="w-full sm:w-auto text-center border border-[#263238] hover:bg-[#E0F2F1] text-[#263238] font-semibold px-6 py-3 rounded-lg transition"
            >
              Cancel
            </Link>

          </div>
        </form>
      </div>

      {/* Back */}
      <div className="mt-6">
        <Link
          to="/admin/users"
          className="text-[#388E3C] font-semibold hover:underline"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
};

export default EditUser;