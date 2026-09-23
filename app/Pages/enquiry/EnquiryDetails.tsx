import { Link, useParams } from "react-router-dom";

type Enquiry = {
  id: number;
  customerName: string;
  email: string;
  mobile: string;
  subject: string;
  category: string;
  message: string;
  priority: "Low" | "Medium" | "High";
  status: "New" | "Pending" | "Completed";
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

const EnquiryDetails = () => {
  const { id } = useParams();

  const enquiry = enquiries.find(
    (item) => item.id === Number(id)
  );

  const getStatusClass = (status: Enquiry["status"]) => {
    if (status === "New") {
      return "bg-[#E0F2F1] text-[#263238]";
    }

    if (status === "Pending") {
      return "bg-[#FFF3CD] text-[#8A6D1D]";
    }

    return "bg-[#E8F5E9] text-[#2E7D32]";
  };

  const getPriorityClass = (priority: Enquiry["priority"]) => {
    if (priority === "High") {
      return "bg-[#FFEBEE] text-[#C62828]";
    }

    if (priority === "Medium") {
      return "bg-[#FFF3E0] text-[#E65100]";
    }

    return "bg-[#ECEFF1] text-[#546E7A]";
  };

  if (!enquiry) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-3xl">
            📭
          </div>

          <h1 className="text-2xl font-bold text-[#263238] mt-5">
            Enquiry Not Found
          </h1>

          <p className="text-gray-600 mt-2">
            The enquiry you are looking for does not exist.
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
            Enquiry Details
          </h1>

          <p className="text-gray-600 mt-2">
            View complete information about this enquiry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/enquiries"
            className="text-center border border-[#263238] text-[#263238] hover:bg-[#E0F2F1] font-semibold px-5 py-3 rounded-lg transition"
          >
            ← Back
          </Link>

          <Link
            to={`/enquiries/${enquiry.id}/edit`}
            className="text-center bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Edit Enquiry
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Customer Card */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <div className="flex flex-col items-center text-center">

            <div className="w-20 h-20 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] flex items-center justify-center">
              <span className="text-3xl font-bold text-[#263238]">
                {enquiry.customerName.charAt(0).toUpperCase()}
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#263238] mt-4">
              {enquiry.customerName}
            </h2>

            <p className="text-gray-500 mt-1 break-all">
              {enquiry.email}
            </p>
          </div>

          <div className="mt-8 space-y-5">

            <div className="p-4 bg-[#E0F2F1] rounded-xl">
              <p className="text-sm text-gray-500">
                Mobile Number
              </p>

              <p className="font-semibold text-[#263238] mt-1">
                {enquiry.mobile}
              </p>
            </div>

            <div className="p-4 bg-[#E8F5F3] rounded-xl">
              <p className="text-sm text-gray-500">
                Category
              </p>

              <p className="font-semibold text-[#263238] mt-1">
                {enquiry.category}
              </p>
            </div>

            <div className="p-4 bg-[#D9F0ED] rounded-xl">
              <p className="text-sm text-gray-500">
                Created Date
              </p>

              <p className="font-semibold text-[#263238] mt-1">
                {enquiry.date}
              </p>
            </div>

          </div>
        </div>

        {/* Enquiry Information */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

            <div>
              <p className="text-sm text-gray-500">
                Subject
              </p>

              <h2 className="text-2xl font-bold text-[#263238] mt-1">
                {enquiry.subject}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">

              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getPriorityClass(
                  enquiry.priority
                )}`}
              >
                {enquiry.priority} Priority
              </span>

              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusClass(
                  enquiry.status
                )}`}
              >
                {enquiry.status}
              </span>

            </div>
          </div>

          {/* Message */}
          <div className="mt-8">

            <h3 className="text-lg font-bold text-[#263238]">
              Enquiry Message
            </h3>

            <div className="mt-3 bg-[#E8F5F3] border border-[#B2DFDB] rounded-xl p-5">
              <p className="text-[#37474F] leading-relaxed">
                {enquiry.message}
              </p>
            </div>

          </div>

          {/* Details */}
          <div className="mt-8 pt-6 border-t border-[#B2DFDB]">

            <h3 className="text-lg font-bold text-[#263238]">
              Enquiry Information
            </h3>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="p-4 bg-[#E0F2F1] rounded-xl">
                <p className="text-sm text-gray-500">
                  Customer Name
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {enquiry.customerName}
                </p>
              </div>

              <div className="p-4 bg-[#E8F5F3] rounded-xl">
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold text-[#263238] mt-1 break-all">
                  {enquiry.email}
                </p>
              </div>

              <div className="p-4 bg-[#D9F0ED] rounded-xl">
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {enquiry.category}
                </p>
              </div>

              <div className="p-4 bg-[#CCEBE7] rounded-xl">
                <p className="text-sm text-gray-500">
                  Priority
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {enquiry.priority}
                </p>
              </div>

              <div className="p-4 bg-[#E0F2F1] rounded-xl">
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {enquiry.status}
                </p>
              </div>

              <div className="p-4 bg-[#E8F5F3] rounded-xl">
                <p className="text-sm text-gray-500">
                  Created Date
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  {enquiry.date}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

        <div className="flex flex-col sm:flex-row gap-3">

          <Link
            to={`/enquiries/${enquiry.id}/edit`}
            className="w-full sm:w-auto text-center bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Edit Enquiry
          </Link>

          <Link
            to="/enquiries"
            className="w-full sm:w-auto text-center border border-[#263238] text-[#263238] hover:bg-[#E0F2F1] font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Enquiries
          </Link>

        </div>
      </div>

    </div>
  );
};

export default EnquiryDetails;