import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

type EnquiryFormData = {
  customerName: string;
  email: string;
  mobile: string;
  subject: string;
  category: string;
  message: string;
  priority: "Low" | "Medium" | "High";
  status: "New" | "Pending" | "Completed";
};

type Enquiry = EnquiryFormData & {
  id: number;
  date: string;
};

const enquiries: Enquiry[] = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    subject: "Product enquiry",
    category: "Product",
    message: "I want to know more about your product.",
    priority: "High",
    status: "Pending",
    date: "20 Sep 2026",
  },
  {
    id: 2,
    customerName: "Sneha Patil",
    email: "sneha@gmail.com",
    mobile: "9876543211",
    subject: "Service enquiry",
    category: "Service",
    message: "I need information about your services.",
    priority: "Medium",
    status: "Completed",
    date: "19 Sep 2026",
  },
  {
    id: 3,
    customerName: "Amit Joshi",
    email: "amit@gmail.com",
    mobile: "9876543212",
    subject: "Pricing enquiry",
    category: "Pricing",
    message: "Please share the pricing details.",
    priority: "Low",
    status: "New",
    date: "18 Sep 2026",
  },
  {
    id: 4,
    customerName: "Priya Kulkarni",
    email: "priya@gmail.com",
    mobile: "9876543213",
    subject: "Support request",
    category: "Support",
    message: "I need help regarding my account.",
    priority: "High",
    status: "New",
    date: "17 Sep 2026",
  },
];

const EditEnquiry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notFound, setNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>();

  useEffect(() => {
    const enquiry = enquiries.find(
      (item) => item.id === Number(id)
    );

    if (!enquiry) {
      setNotFound(true);
      return;
    }

    reset({
      customerName: enquiry.customerName,
      email: enquiry.email,
      mobile: enquiry.mobile,
      subject: enquiry.subject,
      category: enquiry.category,
      message: enquiry.message,
      priority: enquiry.priority,
      status: enquiry.status,
    });
  }, [id, reset]);

  const onSubmit = (data: EnquiryFormData) => {
    console.log("Updated Enquiry:", {
      id: Number(id),
      ...data,
    });

    navigate(`/enquiries/${id}`);
  };

  if (notFound) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-4xl">
            📭
          </div>

          <h1 className="text-2xl font-bold text-[#263238] mt-5">
            Enquiry Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The enquiry you are trying to edit does not exist.
          </p>

          <Link
            to="/enquiries"
            className="inline-block mt-6 bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Enquiries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-[#263238] font-semibold text-sm">
            ENQUIRY MANAGEMENT
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
            Edit Enquiry
          </h1>

          <p className="text-gray-600 mt-2">
            Update customer enquiry information.
          </p>
        </div>

        <Link
          to={`/enquiries/${id}`}
          className="text-center border border-[#263238] hover:bg-[#E0F2F1] text-[#263238] font-semibold px-5 py-3 rounded-lg transition"
        >
          ← Back to Details
        </Link>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 sm:p-8">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Customer Information */}
          <div>
            <h2 className="text-xl font-bold text-[#263238]">
              Customer Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Update customer contact details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Customer Name */}
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Customer Name
              </label>

              <input
                id="customerName"
                type="text"
                placeholder="Enter customer name"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("customerName", {
                  required: "Customer name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {errors.customerName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customerName.message}
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

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Category
              </label>

              <select
                id="category"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("category", {
                  required: "Please select a category",
                })}
              >
                <option value="">Select category</option>
                <option value="Product">Product</option>
                <option value="Service">Service</option>
                <option value="Support">Support</option>
                <option value="Pricing">Pricing</option>
                <option value="Other">Other</option>
              </select>

              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          {/* Enquiry Details */}
          <div className="pt-4 border-t border-[#B2DFDB]">
            <h2 className="text-xl font-bold text-[#263238]">
              Enquiry Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Update enquiry information.
            </p>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#37474F] mb-1"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="Enter enquiry subject"
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
            />

            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#37474F] mb-1"
            >
              Enquiry Message
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Enter enquiry details"
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
              {...register("message", {
                required: "Enquiry message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Priority + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Priority */}
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-[#37474F] mb-1"
              >
                Priority
              </label>

              <select
                id="priority"
                className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
                {...register("priority", {
                  required: "Please select priority",
                })}
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
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
                  required: "Please select status",
                })}
              >
                <option value="">Select status</option>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>

              {errors.status && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#B2DFDB]">

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Update Enquiry
            </button>

            <Link
              to={`/enquiries/${id}`}
              className="w-full sm:w-auto text-center border border-[#263238] hover:bg-[#E0F2F1] text-[#263238] font-semibold px-6 py-3 rounded-lg transition"
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditEnquiry;