import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type AddUserFormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
};

const AddUser = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddUserFormData>({
    defaultValues: {
      role: "customer",
      status: "active",
    },
  });

  const password = watch("password");

  const onSubmit = (data: AddUserFormData) => {
    console.log("New User Data:", data);

    setSubmitted(true);

    setTimeout(() => {
      navigate("/admin/users");
    }, 1000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray-50 px-4 sm:px-6 lg:px-10 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-blue-600 uppercase">
          Admin Panel
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
          Add User
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new user account.
        </p>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="mb-6 max-w-4xl rounded-lg border border-green-200 bg-green-50 px-5 py-4">
          <p className="font-semibold text-green-700">
            User created successfully!
          </p>

          <p className="text-sm text-green-600 mt-1">
            Redirecting to user management...
          </p>
        </div>
      )}

      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              User Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Enter the user's basic information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile Number
              </label>

              <input
                id="mobile"
                type="tel"
                maxLength={10}
                placeholder="Enter 10 digit mobile number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Enter a valid 10 digit mobile number",
                  },
                })}
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>

              <select
                id="role"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          </div>

          {/* Password Section */}
          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              Password
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create a secure password for the user.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("confirmPassword", {
                  required:
                    "Please confirm your password",
                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              Account Status
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Select the user's account status.
            </p>
          </div>

          <div className="max-w-md">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>

            <select
              id="status"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Create User
            </button>

            <Link
              to="/admin/users"
              className="w-full sm:w-auto text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>

      {/* Back */}
      <div className="mt-6">
        <Link
          to="/admin"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to Admin Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AddUser;