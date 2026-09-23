import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray-50 px-4 sm:px-6 lg:px-10 py-8">

      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Welcome, {user?.name || "User"} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your CRM today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Customers */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Customers
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                120
              </h2>
            </div>

            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-xl">👥</span>
            </div>
          </div>

          <p className="text-sm text-green-600 mt-4">
            +12% this month
          </p>
        </div>

        {/* Enquiries */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Enquiries
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                48
              </h2>
            </div>

            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <span className="text-xl">📩</span>
            </div>
          </div>

          <p className="text-sm text-green-600 mt-4">
            +8% this month
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending Enquiries
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                15
              </h2>
            </div>

            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <span className="text-xl">⏳</span>
            </div>
          </div>

          <p className="text-sm text-orange-600 mt-4">
            Needs attention
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                33
              </h2>
            </div>

            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <span className="text-xl">✓</span>
            </div>
          </div>

          <p className="text-sm text-purple-600 mt-4">
            69% completion
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Frequently used actions
          </p>

          <div className="mt-5 space-y-3">

            <Link
              to="/enquiries/add"
              className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              <span className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                +
              </span>

              <div>
                <p className="font-semibold text-gray-900">
                  Add Enquiry
                </p>

                <p className="text-sm text-gray-500">
                  Create a new enquiry
                </p>
              </div>
            </Link>

            <Link
              to="/enquiries"
              className="flex items-center gap-3 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition"
            >
              <span className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center">
                ≡
              </span>

              <div>
                <p className="font-semibold text-gray-900">
                  View Enquiries
                </p>

                <p className="text-sm text-gray-500">
                  Manage all enquiries
                </p>
              </div>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition"
            >
              <span className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                👤
              </span>

              <div>
                <p className="font-semibold text-gray-900">
                  My Profile
                </p>

                <p className="text-sm text-gray-500">
                  View your profile
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Enquiries
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Latest customer enquiries
              </p>
            </div>

            <Link
              to="/enquiries"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View All
            </Link>

          </div>

          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[600px]">

              <thead>
                <tr className="border-b border-gray-200">

                  <th className="text-left py-3 text-sm font-semibold text-gray-600">
                    Customer
                  </th>

                  <th className="text-left py-3 text-sm font-semibold text-gray-600">
                    Subject
                  </th>

                  <th className="text-left py-3 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="text-left py-3 text-sm font-semibold text-gray-600">
                    Date
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-gray-100">

                  <td className="py-4 text-sm text-gray-900">
                    Rahul Sharma
                  </td>

                  <td className="py-4 text-sm text-gray-600">
                    Product enquiry
                  </td>

                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  </td>

                  <td className="py-4 text-sm text-gray-500">
                    20 Sep 2026
                  </td>

                </tr>

                <tr className="border-b border-gray-100">

                  <td className="py-4 text-sm text-gray-900">
                    Sneha Patil
                  </td>

                  <td className="py-4 text-sm text-gray-600">
                    Service enquiry
                  </td>

                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Completed
                    </span>
                  </td>

                  <td className="py-4 text-sm text-gray-500">
                    19 Sep 2026
                  </td>

                </tr>

                <tr>

                  <td className="py-4 text-sm text-gray-900">
                    Amit Joshi
                  </td>

                  <td className="py-4 text-sm text-gray-600">
                    Pricing enquiry
                  </td>

                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      New
                    </span>
                  </td>

                  <td className="py-4 text-sm text-gray-500">
                    18 Sep 2026
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;