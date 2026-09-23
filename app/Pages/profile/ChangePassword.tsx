import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  const newPassword = watch("newPassword");

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log("Change Password Data:", data);

    // Backend connect झाल्यावर इथे API call करू
    setSubmitted(true);
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-[#263238] font-semibold text-sm">
          ACCOUNT SETTINGS
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
          Change Password
        </h1>

        <p className="text-gray-600 mt-2">
          Update your account password securely.
        </p>
      </div>

      {/* Password Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 sm:p-8">

        {submitted ? (
          /* Success Message */
          <div className="text-center py-6">

            <div className="mx-auto w-16 h-16 rounded-full bg-[#E8F5F3] border border-[#B2DFDB] flex items-center justify-center">
              <span className="text-3xl text-[#2E7D32]">
                ✓
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#263238] mt-5">
              Password Changed Successfully
            </h2>

            <p className="text-gray-500 mt-2">
              Your password has been updated successfully.
            </p>

            <button
              type="button"
              onClick={goToProfile}
              className="
                mt-6
                bg-[#263238]
                hover:bg-[#37474F]
                text-white
                font-semibold
                px-6
                py-3
                rounded-lg
                transition
              "
            >
              Back to Profile
            </button>

          </div>
        ) : (
          <>
            {/* Card Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#263238]">
                Update Password
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Enter your current password and create a new password.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              {/* Current Password */}
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium text-[#37474F] mb-1"
                >
                  Current Password
                </label>

                <input
                  id="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    text-[#263238]
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                />

                {errors.currentPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-[#37474F] mb-1"
                >
                  New Password
                </label>

                <input
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    text-[#263238]
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                {errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#37474F] mb-1"
                >
                  Confirm New Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    text-[#263238]
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
                  {...register("confirmPassword", {
                    required: "Please confirm your new password",
                    validate: (value) =>
                      value === newPassword ||
                      "Passwords do not match",
                  })}
                />

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#B2DFDB]">

                <button
                  type="submit"
                  className="
                    w-full
                    sm:w-auto
                    bg-[#263238]
                    hover:bg-[#37474F]
                    text-white
                    font-semibold
                    px-6
                    py-3
                    rounded-lg
                    transition
                  "
                >
                  Change Password
                </button>

                <Link
                  to="/profile"
                  className="
                    w-full
                    sm:w-auto
                    text-center
                    border
                    border-[#263238]
                    hover:bg-[#E0F2F1]
                    text-[#263238]
                    font-semibold
                    px-6
                    py-3
                    rounded-lg
                    transition
                  "
                >
                  Cancel
                </Link>

              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default ChangePassword;