import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";

type EditProfileFormData = {
  name: string;
  email: string;
  mobile: string;
};

const EditProfile = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileFormData>();

  // Existing user data form मध्ये set करणे
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        mobile: user.mobile || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data: EditProfileFormData) => {
    if (!user) {
      return;
    }

    // Updated user
    const updatedUser = {
      ...user,
      name: data.name,
      email: data.email,
      mobile: data.mobile,
    };

    // Zustand update
    login(updatedUser);

    // Profile page वर जा
    navigate("/profile");
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="mb-8">

        <p className="text-[#263238] font-semibold text-sm">
          ACCOUNT SETTINGS
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
          Edit Profile
        </h1>

        <p className="text-gray-600 mt-2">
          Update your personal information.
        </p>

      </div>

      {/* Form Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 sm:p-8">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Form Header */}
          <div className="pb-5 border-b border-[#B2DFDB]">
            <h2 className="text-xl font-bold text-[#263238]">
              Personal Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Update your name, email address and mobile number.
            </p>
          </div>

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
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-[#B2DFDB]">

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
              Save Changes
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

      </div>

    </div>
  );
};

export default EditProfile;