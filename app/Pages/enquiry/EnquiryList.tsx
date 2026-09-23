import { useState } from "react";
import { Link } from "react-router-dom";

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

const EnquiryList = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [enquiries, setEnquiries] = useState<Enquiry[]>([
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
  ]);

  // Delete enquiry
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) {
      return;
    }

    setEnquiries((previous) =>
      previous.filter((enquiry) => enquiry.id !== id)
    );
  };

  // Change status
  const handleStatusChange = (
    id: number,
    newStatus: Enquiry["status"]
  ) => {
    setEnquiries((previous) =>
      previous.map((enquiry) =>
        enquiry.id === id
          ? {
              ...enquiry,
              status: newStatus,
            }
          : enquiry
      )
    );
  };

  // Filter enquiries
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      enquiry.customerName.toLowerCase().includes(searchValue) ||
      enquiry.email.toLowerCase().includes(searchValue) ||
      enquiry.subject.toLowerCase().includes(searchValue) ||
      enquiry.category.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" || enquiry.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      enquiry.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Status badge
  const getStatusClass = (status: Enquiry["status"]) => {
    if (status === "New") {
      return "bg-[#E0F2F1] text-[#263238]";
    }

    if (status === "Pending") {
      return "bg-[#FFF3CD] text-[#8A6D1D]";
    }

    return "bg-[#E8F5E9] text-[#2E7D32]";
  };

  // Priority badge
  const getPriorityClass = (priority: Enquiry["priority"]) => {
    if (priority === "High") {
      return "bg-[#FFEBEE] text-[#C62828]";
    }

    if (priority === "Medium") {
      return "bg-[#FFF3E0] text-[#E65100]";
    }

    return "bg-[#ECEFF1] text-[#546E7A]";
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-[#263238] font-semibold text-sm">
            ENQUIRY MANAGEMENT
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
            Enquiries
          </h1>

          <p className="text-gray-600 mt-2">
            Manage and track all customer enquiries.
          </p>
        </div>

        <Link
          to="/enquiries/add"
          className="w-full md:w-auto text-center bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition"
        >
          + Add Enquiry
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-semibold text-[#37474F] mb-2"
            >
              Search
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search customer, email, subject..."
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 text-[#263238] outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label
              htmlFor="statusFilter"
              className="block text-sm font-semibold text-[#37474F] mb-2"
            >
              Status
            </label>

            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 text-[#263238] outline-none focus:bg-white focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div>
            <label
              htmlFor="priorityFilter"
              className="block text-sm font-semibold text-[#37474F] mb-2"
            >
              Priority
            </label>

            <select
              id="priorityFilter"
              value={priorityFilter}
              onChange={(event) =>
                setPriorityFilter(event.target.value)
              }
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 text-[#263238] outline-none focus:bg-white focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            >
              <option value="All">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enquiry Table */}
      <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg overflow-hidden">

        {/* Table Header */}
        <div className="p-5 border-b border-[#B2DFDB]">
          <h2 className="text-xl font-bold text-[#263238]">
            All Enquiries
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {filteredEnquiries.length}{" "}
            {filteredEnquiries.length === 1
              ? "enquiry"
              : "enquiries"}
          </p>
        </div>

        {/* No Data */}
        {filteredEnquiries.length === 0 ? (
          <div className="py-16 text-center px-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-3xl">
              📭
            </div>

            <h3 className="text-lg font-semibold text-[#263238] mt-4">
              No enquiries found
            </h3>

            <p className="text-gray-500 mt-1">
              Try changing your search or filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">

              <thead>
                <tr className="bg-[#E8F5F3] border-b border-[#B2DFDB]">

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Customer
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Subject
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Category
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Priority
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Status
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Date
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="border-b border-[#E8F5F3] hover:bg-[#F8FAFA] transition"
                  >

                    {/* Customer */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#263238]">
                        {enquiry.customerName}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {enquiry.email}
                      </p>
                    </td>

                    {/* Subject */}
                    <td className="px-5 py-4">
                      <p className="text-sm text-[#37474F]">
                        {enquiry.subject}
                      </p>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-[#546E7A]">
                        {enquiry.category}
                      </span>
                    </td>

                    {/* Priority */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getPriorityClass(
                          enquiry.priority
                        )}`}
                      >
                        {enquiry.priority}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <select
                        value={enquiry.status}
                        onChange={(event) =>
                          handleStatusChange(
                            enquiry.id,
                            event.target.value as Enquiry["status"]
                          )
                        }
                        className={`px-3 py-2 rounded-lg border-0 text-xs font-semibold outline-none cursor-pointer ${getStatusClass(
                          enquiry.status
                        )}`}
                      >
                        <option value="New">New</option>
                        <option value="Pending">
                          Pending
                        </option>
                        <option value="Completed">
                          Completed
                        </option>
                      </select>
                    </td>

                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {enquiry.date}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">

                        <Link
                          to={`/enquiries/${enquiry.id}`}
                          className="px-3 py-2 rounded-lg bg-[#E0F2F1] text-[#263238] hover:bg-[#CCEBE7] text-sm font-semibold transition"
                        >
                          View
                        </Link>

                        <Link
                          to={`/enquiries/${enquiry.id}/edit`}
                          className="px-3 py-2 rounded-lg bg-[#FFF3E0] text-[#E65100] hover:bg-[#FFE0B2] text-sm font-semibold transition"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(enquiry.id)
                          }
                          className="px-3 py-2 rounded-lg bg-[#FFEBEE] text-[#C62828] hover:bg-[#FFCDD2] text-sm font-semibold transition"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryList;