import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot Password Email:", data.email);

    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#B2DFDB] shadow-xl p-6 sm:p-8 lg:p-10">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="mx-auto w-14 h-14 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] flex items-center justify-center">
            <span className="text-2xl">
              🔐
            </span>
          </div>

          <h1 className="text-3xl font-bold text-[#263238] mt-5">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your registered email address and we'll help you reset your
            password.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

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
              placeholder="Enter your email"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#263238] hover:bg-[#37474F] text-white font-semibold py-3 rounded-lg transition"
          >
            Send Reset Link
          </button>

        </form>

        {/* Success Message */}
        {submitted && (
          <div className="mt-5 rounded-lg bg-[#E8F5F3] border border-[#B2DFDB] px-4 py-4">

            <p className="text-[#2E7D32] text-sm font-medium">
              Password reset instructions have been sent to your email.
            </p>

            <Link
              to="/reset-password"
              className="block text-center mt-4 bg-[#263238] hover:bg-[#37474F] text-white font-semibold py-2.5 rounded-lg transition"
            >
              Continue to Reset Password
            </Link>

          </div>
        )}

        {/* Back to Sign In */}
        <div className="text-center mt-6">

          <Link
            to="/signin"
            className="text-[#388E3C] font-semibold hover:underline"
          >
            ← Back to Sign In
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;