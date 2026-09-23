import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log("Sign In Data:", data);

    const user = {
      id: "1",
      name: "Pratiksha",
      email: data.email,
      mobile: "9876543210",
      role:
        data.email === "admin@crm.com"
          ? ("admin" as const)
          : ("customer" as const),
    };

    login(user);

    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B2DFDB]">

        {/* Left Section */}
        <div className="hidden lg:flex bg-[#263238] text-white p-12 flex-col justify-center relative overflow-hidden">

          {/* Decorative Circle */}
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
              Welcome Back
            </h1>

            <p className="mt-5 text-[#CFD8DC] text-lg leading-relaxed max-w-md">
              Sign in to manage your customers, enquiries and CRM activities
              from one simple platform.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  Manage Customers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  Manage Enquiries
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#80CBC4]/15 text-[#80CBC4] flex items-center justify-center">
                  ✓
                </span>
                <span className="text-[#ECEFF1]">
                  Track Your Business
                </span>
              </div>

            </div>

          </div>
        </div>


        {/* Right Section */}
        <div className="p-6 sm:p-8 lg:p-12">

          <div className="max-w-md mx-auto">

            <div className="text-center mb-8">

              <div className="lg:hidden mx-auto w-12 h-12 rounded-xl bg-[#263238] text-[#80CBC4] flex items-center justify-center font-bold text-xl mb-4">
                C
              </div>

              <h2 className="text-3xl font-bold text-[#263238]">
                Sign In
              </h2>

              <p className="text-gray-600 mt-2">
                Welcome back! Please enter your details.
              </p>

            </div>


            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label className="block text-sm font-semibold text-[#37474F] mb-2">
                  Email Address
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


              {/* Password */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-semibold text-[#37474F]">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#388E3C] hover:text-[#263238] hover:underline"
                  >
                    Forgot Password?
                  </Link>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
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


              {/* Remember Me */}
              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-[#263238]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>

              </div>


              {/* Button */}
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
                "
              >
                Sign In
              </button>

            </form>


            <p className="text-center text-gray-600 mt-6">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-[#388E3C] font-semibold hover:text-[#263238] hover:underline"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SignIn;