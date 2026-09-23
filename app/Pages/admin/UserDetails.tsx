import { Link, useNavigate, useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
  joinedDate: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    role: "customer",
    status: "active",
    joinedDate: "20 Sep 2026",
  },
  {
    id: 2,
    name: "Sneha Patil",
    email: "sneha@gmail.com",
    mobile: "9876543211",
    role: "customer",
    status: "active",
    joinedDate: "19 Sep 2026",
  },
  {
    id: 3,
    name: "Amit Joshi",
    email: "amit@gmail.com",
    mobile: "9876543212",
    role: "customer",
    status: "inactive",
    joinedDate: "18 Sep 2026",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@crm.com",
    mobile: "9876543213",
    role: "admin",
    status: "active",
    joinedDate: "15 Sep 2026",
  },
];

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = Number(id);

  const user = users.find((item) => item.id === userId);

  const handleDelete = () => {
    if (!user) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (confirmed) {
      console.log("Delete User:", user.id);
      navigate("/admin/users");
    }
  };

  if (!user) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-8 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-4xl">
            🔍
          </div>

          <h1 className="text-2xl font-bold text-[#263238] mt-5">
            User Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The user you are looking for does not exist.
          </p>

          <Link
            to="/admin/users"
            className="inline-block mt-6 bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Users
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
          <p className="text-sm font-semibold text-[#263238] uppercase">
            Admin Panel
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
            User Details
          </h1>

          <p className="text-gray-600 mt-2">
            View complete user account information.
          </p>
        </div>

        <Link
          to="/admin/users"
          className="w-full sm:w-auto text-center border border-[#263238] hover:bg-[#E0F2F1] text-[#263238] font-semibold px-5 py-3 rounded-lg transition"
        >
          ← Back to Users
        </Link>
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#B2DFDB] shadow-lg overflow-hidden">

        {/* Profile Header */}
        <div className="bg-[#263238] px-6 sm:px-8 py-8">

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="w-24 h-24 rounded-full bg-[#E0F2F1] text-[#263238] flex items-center justify-center text-4xl font-bold shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="text-white">

              <h2 className="text-2xl sm:text-3xl font-bold">
                {user.name}
              </h2>

              <p className="text-[#B2DFDB] mt-1">
                {user.email}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-4">

                <span className="px-3 py-1 rounded-full bg-[#80CBC4]/20 text-[#E0F2F1] text-sm font-medium capitalize">
                  {user.role}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                    user.status === "active"
                      ? "bg-[#E8F5E9] text-[#2E7D32]"
                      : "bg-[#ECEFF1] text-[#546E7A]"
                  }`}
                >
                  {user.status}
                </span>

              </div>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="p-6 sm:p-8">

          <div>
            <h2 className="text-xl font-bold text-[#263238]">
              Personal Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              User account details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

            {/* Name */}
            <div className="p-5 rounded-xl bg-[#E0F2F1]">
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1">
                {user.name}
              </p>
            </div>

            {/* Email */}
            <div className="p-5 rounded-xl bg-[#E8F5F3]">
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1 break-all">
                {user.email}
              </p>
            </div>

            {/* Mobile */}
            <div className="p-5 rounded-xl bg-[#D9F0ED]">
              <p className="text-sm text-gray-500">
                Mobile Number
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1">
                {user.mobile}
              </p>
            </div>

            {/* Role */}
            <div className="p-5 rounded-xl bg-[#CCEBE7]">
              <p className="text-sm text-gray-500">
                Account Role
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1 capitalize">
                {user.role}
              </p>
            </div>

            {/* Status */}
            <div className="p-5 rounded-xl bg-[#E8F5F3]">
              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1 capitalize">
                {user.status}
              </p>
            </div>

            {/* Joined */}
            <div className="p-5 rounded-xl bg-[#E0F2F1]">
              <p className="text-sm text-gray-500">
                Joined Date
              </p>

              <p className="text-lg font-semibold text-[#263238] mt-1">
                {user.joinedDate}
              </p>
            </div>
          </div>

          {/* Account Information */}
          <div className="mt-8 pt-6 border-t border-[#B2DFDB]">

            <h2 className="text-xl font-bold text-[#263238]">
              Account Information
            </h2>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <p className="text-sm text-gray-500">
                  User ID
                </p>

                <p className="font-semibold text-[#263238] mt-1">
                  #{user.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Account Type
                </p>

                <p className="font-semibold text-[#263238] mt-1 capitalize">
                  {user.role} account
                </p>
              </div>

            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[#B2DFDB]">

            <Link
              to={`/admin/users/${user.id}/edit`}
              className="w-full sm:w-auto text-center bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Edit User
            </Link>

            <button
              type="button"
              onClick={handleDelete}
              className="w-full sm:w-auto bg-[#FFEBEE] hover:bg-[#FFCDD2] text-[#C62828] font-semibold px-6 py-3 rounded-lg transition"
            >
              Delete User
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Back Link */}
      <div className="mt-6">
        <Link
          to="/admin/users"
          className="text-[#388E3C] font-semibold hover:underline"
        >
          ← Back to User Management
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;