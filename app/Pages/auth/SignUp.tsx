import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type SignUpFormData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const password = watch("password");

  const onSubmit = (data: SignUpFormData) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B2DFDB]">

        {/* Left Section */}
        <div className="hidden lg:flex bg-[#263238] text-white p-12 flex-col justify-center relative overflow-hidden">

          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#80CBC4]/10" />
          <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-[#80CBC4]/10" />

          <div className="relative z-10">

            <div className="w-12 h-12 rounded-xl bg-[#80CBC4] text-[#263238] flex items-center justify-center font-bold text-xl mb-6">
              C
            </div>

            <p className="text-[#80CBC4] font-semibold text-sm tracking-wider mb-3">
              CRM APPLICATION
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              Create Your Account
            </h1>

            <p className="mt-5 text-[#CFD8DC] text-lg leading-relaxed max-w-md">
              Create your account and start managing customers and enquiries
              easily from one place.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  User Management
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  Enquiry Management
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  Easy Dashboard
                </span>
              </div>

            </div>

          </div>
        </div>


        {/* Right Section */}
        <div className="p-6 sm:p-8 lg:p-10">

          <div className="max-w-md mx-auto">

            <div className="text-center mb-8">

              <div className="lg:hidden mx-auto w-12 h-12 rounded-xl bg-[#263238] text-[#80CBC4] flex items-center justify-center font-bold text-xl mb-4">
                C
              </div>

              <h2 className="text-3xl font-bold text-[#263238]">
                Create Account
              </h2>

              <p className="text-gray-600 mt-2">
                Sign up to get started with CRM
              </p>

            </div>


            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >

              {/* Name */}
              <div>

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4 py-3
                    text-[#263238]
                    outline-none
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
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

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4 py-3
                    text-[#263238]
                    outline-none
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
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

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  maxLength={10}
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4 py-3
                    text-[#263238]
                    outline-none
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
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


              {/* Password */}
              <div>

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4 py-3
                    text-[#263238]
                    outline-none
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
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

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="
                    w-full
                    bg-[#F8FAFA]
                    border border-[#B2DFDB]
                    rounded-lg
                    px-4 py-3
                    text-[#263238]
                    outline-none
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#80CBC4]/40
                    focus:border-[#4F9D95]
                    transition
                  "
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


              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  bg-[#263238]
                  hover:bg-[#37474F]
                  text-white
                  font-semibold
                  py-3
                  rounded-lg
                  shadow-sm
                  hover:shadow-md
                  transition
                  mt-2
                "
              >
                Create Account
              </button>

            </form>


            {/* Sign In */}
            <p className="text-center text-gray-600 mt-6">

              Already have an account?{" "}

              <Link
                to="/signin"
                className="text-[#388E3C] font-semibold hover:text-[#263238] hover:underline"
              >
                Sign In
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SignUp;