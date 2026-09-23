import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-[#263238] uppercase">
          Admin Panel
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Manage users and monitor all CRM activities.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Users */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Users
              </p>

              <h2 className="text-3xl font-bold text-[#263238] mt-2">
                150
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E0F2F1] flex items-center justify-center">
              <span className="text-xl">👥</span>
            </div>
          </div>

          <p className="text-sm text-[#2E7D32] mt-4">
            +10 this month
          </p>
        </div>

        {/* Total Enquiries */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Enquiries
              </p>

              <h2 className="text-3xl font-bold text-[#263238] mt-2">
                85
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F5F3] flex items-center justify-center">
              <span className="text-xl">📩</span>
            </div>
          </div>

          <p className="text-sm text-[#2E7D32] mt-4">
            +15 this month
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending Enquiries
              </p>

              <h2 className="text-3xl font-bold text-[#263238] mt-2">
                24
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] flex items-center justify-center">
              <span className="text-xl">⏳</span>
            </div>
          </div>

          <p className="text-sm text-[#E65100] mt-4">
            Needs attention
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <h2 className="text-3xl font-bold text-[#263238] mt-2">
                61
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
              <span className="text-xl">✓</span>
            </div>
          </div>

          <p className="text-sm text-[#2E7D32] mt-4">
            72% completion
          </p>
        </div>
      </div>

      {/* Quick Actions + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#263238]">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Frequently used admin actions.
          </p>

          <div className="mt-5 space-y-3">

            <Link
              to="/admin/users"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E0F2F1] hover:bg-[#CCEBE7] transition"
            >
              <span className="w-10 h-10 rounded-lg bg-[#263238] text-white flex items-center justify-center">
                👥
              </span>

              <div>
                <p className="font-semibold text-[#263238]">
                  Manage Users
                </p>

                <p className="text-sm text-gray-500">
                  View all users
                </p>
              </div>
            </Link>

            <Link
              to="/admin/users/add"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E8F5F3] hover:bg-[#D9F0ED] transition"
            >
              <span className="w-10 h-10 rounded-lg bg-[#4F9D95] text-white flex items-center justify-center">
                +
              </span>

              <div>
                <p className="font-semibold text-[#263238]">
                  Add User
                </p>

                <p className="text-sm text-gray-500">
                  Create a new user
                </p>
              </div>
            </Link>

            <Link
              to="/enquiries"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#D9F0ED] hover:bg-[#CCEBE7] transition"
            >
              <span className="w-10 h-10 rounded-lg bg-[#37474F] text-white flex items-center justify-center">
                ≡
              </span>

              <div>
                <p className="font-semibold text-[#263238]">
                  View Enquiries
                </p>

                <p className="text-sm text-gray-500">
                  Manage all enquiries
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Enquiry Summary */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#263238]">
                Enquiry Summary
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Current enquiry status.
              </p>
            </div>

            <Link
              to="/enquiries"
              className="text-sm font-semibold text-[#388E3C] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-8 space-y-6">

            {/* New */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#37474F]">
                  New
                </span>

                <span className="text-sm font-semibold text-[#263238]">
                  18
                </span>
              </div>

              <div className="w-full h-3 bg-[#E8F5F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#80CBC4] rounded-full w-[30%]" />
              </div>
            </div>

            {/* Pending */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#37474F]">
                  Pending
                </span>

                <span className="text-sm font-semibold text-[#263238]">
                  24
                </span>
              </div>

              <div className="w-full h-3 bg-[#E8F5F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#E6B566] rounded-full w-[40%]" />
              </div>
            </div>

            {/* Completed */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#37474F]">
                  Completed
                </span>

                <span className="text-sm font-semibold text-[#263238]">
                  43
                </span>
              </div>

              <div className="w-full h-3 bg-[#E8F5F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#4CAF50] rounded-full w-[70%]" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        {/* Recent Users */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#263238]">
                Recent Users
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Recently registered users.
              </p>
            </div>

            <Link
              to="/admin/users"
              className="text-sm font-semibold text-[#388E3C] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-4">

            {/* Rahul */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#E0F2F1] flex items-center justify-center font-semibold text-[#263238]">
                  R
                </div>

                <div>
                  <p className="font-semibold text-[#263238]">
                    Rahul Sharma
                  </p>

                  <p className="text-sm text-gray-500">
                    rahul@gmail.com
                  </p>
                </div>

              </div>

              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium">
                Active
              </span>
            </div>

            {/* Sneha */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#E8F5F3] flex items-center justify-center font-semibold text-[#263238]">
                  S
                </div>

                <div>
                  <p className="font-semibold text-[#263238]">
                    Sneha Patil
                  </p>

                  <p className="text-sm text-gray-500">
                    sneha@gmail.com
                  </p>
                </div>

              </div>

              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium">
                Active
              </span>
            </div>

            {/* Amit */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#D9F0ED] flex items-center justify-center font-semibold text-[#263238]">
                  A
                </div>

                <div>
                  <p className="font-semibold text-[#263238]">
                    Amit Joshi
                  </p>

                  <p className="text-sm text-gray-500">
                    amit@gmail.com
                  </p>
                </div>

              </div>

              <span className="px-3 py-1 rounded-full bg-[#FFF3CD] text-[#8A6D1D] text-xs font-medium">
                Pending
              </span>
            </div>

          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#263238]">
                Recent Enquiries
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Latest customer enquiries.
              </p>
            </div>

            <Link
              to="/enquiries"
              className="text-sm font-semibold text-[#388E3C] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-4">

            {/* Product */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#263238]">
                  Product enquiry
                </p>

                <p className="text-sm text-gray-500">
                  Rahul Sharma
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#FFF3CD] text-[#8A6D1D] text-xs font-medium">
                Pending
              </span>
            </div>

            {/* Service */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#263238]">
                  Service enquiry
                </p>

                <p className="text-sm text-gray-500">
                  Sneha Patil
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium">
                Completed
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#263238]">
                  Pricing enquiry
                </p>

                <p className="text-sm text-gray-500">
                  Amit Joshi
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#263238] text-xs font-medium">
                New
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;