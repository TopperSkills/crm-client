import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const password = watch("password");

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log("Reset Password Data:", data);

    setSubmitted(true);
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#B2DFDB] shadow-xl p-6 sm:p-8 lg:p-10">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="mx-auto w-14 h-14 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] flex items-center justify-center">
            <span className="text-2xl">
              🔑
            </span>
          </div>

          <h1 className="text-3xl font-bold text-[#263238] mt-5">
            Reset Password
          </h1>

          <p className="text-gray-500 mt-2">
            Create a new password for your account.
          </p>

        </div>

        {/* Success */}
        {submitted ? (

          <div className="text-center">

            <div className="rounded-lg bg-[#E8F5F3] border border-[#B2DFDB] px-4 py-4">
              <p className="text-[#2E7D32] font-medium">
                Your password has been reset successfully.
              </p>
            </div>

            <button
              type="button"
              onClick={goToSignIn}
              className="w-full mt-6 bg-[#263238] hover:bg-[#37474F] text-white font-semibold py-3 rounded-lg transition"
            >
              Go to Sign In
            </button>

          </div>

        ) : (

          /* Form */
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* New Password */}
            <div>

              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                New Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
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
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#263238] hover:bg-[#37474F] text-white font-semibold py-3 rounded-lg transition"
            >
              Reset Password
            </button>

            {/* Back */}
            <div className="text-center">

              <Link
                to="/signin"
                className="text-[#388E3C] font-semibold hover:underline"
              >
                ← Back to Sign In
              </Link>

            </div>

          </form>

        )}

      </div>

    </div>
  );
};

export default ResetPassword;