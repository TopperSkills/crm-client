import useAuthStore from "../../store/authStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-8 lg:px-16 py-10">

      <div className="w-full">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#263238] font-semibold text-sm">
            CRM DASHBOARD
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#263238] mt-1">
            Welcome, {user?.name || "User"} 👋
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome to your CRM Dashboard.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Total Customers */}
          <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 hover:shadow-xl transition">
            <div className="w-11 h-11 rounded-xl bg-[#E0F2F1] flex items-center justify-center mb-4">
              <span className="text-xl">👥</span>
            </div>

            <p className="text-gray-500 font-medium">
              Total Customers
            </p>

            <h2 className="text-3xl font-bold text-[#263238] mt-2">
              0
            </h2>
          </div>

          {/* Total Enquiries */}
          <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 hover:shadow-xl transition">
            <div className="w-11 h-11 rounded-xl bg-[#E8F5F3] flex items-center justify-center mb-4">
              <span className="text-xl">📋</span>
            </div>

            <p className="text-gray-500 font-medium">
              Total Enquiries
            </p>

            <h2 className="text-3xl font-bold text-[#263238] mt-2">
              0
            </h2>
          </div>

          {/* Pending */}
          <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 hover:shadow-xl transition">
            <div className="w-11 h-11 rounded-xl bg-[#FFF3E0] flex items-center justify-center mb-4">
              <span className="text-xl">⏳</span>
            </div>

            <p className="text-gray-500 font-medium">
              Pending
            </p>

            <h2 className="text-3xl font-bold text-[#E65100] mt-2">
              0
            </h2>
          </div>

          {/* Completed */}
          <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-6 hover:shadow-xl transition">
            <div className="w-11 h-11 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-4">
              <span className="text-xl">✅</span>
            </div>

            <p className="text-gray-500 font-medium">
              Completed
            </p>

            <h2 className="text-3xl font-bold text-[#2E7D32] mt-2">
              0
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;