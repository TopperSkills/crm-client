import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
  joinedDate: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([
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
  ]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.mobile.includes(search);

      const matchesRole =
        roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  const handleStatusChange = (
    id: number,
    status: "active" | "inactive"
  ) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status,
            }
          : user
      )
    );
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#F4F8F7] px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div>
          <p className="text-sm font-semibold text-[#263238] uppercase">
            Admin Panel
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#263238] mt-1">
            User Management
          </h1>

          <p className="text-gray-600 mt-2">
            Manage all CRM users from here.
          </p>
        </div>

        <Link
          to="/admin/users/add"
          className="w-full sm:w-auto text-center bg-[#263238] hover:bg-[#37474F] text-white font-semibold px-5 py-3 rounded-lg transition"
        >
          + Add User
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Search */}
          <div className="lg:col-span-2">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-[#37474F] mb-1"
            >
              Search User
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email or mobile"
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            />
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-[#37474F] mb-1"
            >
              Role
            </label>

            <select
              id="role"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
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
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#F8FAFA] border border-[#B2DFDB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#80CBC4]/40 focus:border-[#4F9D95] transition"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-4 pt-4 border-t border-[#B2DFDB]">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#263238]">
              {filteredUsers.length}
            </span>{" "}
            {filteredUsers.length === 1 ? "user" : "users"}
          </p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-[#B2DFDB] shadow-lg overflow-hidden">

        <div className="p-5 border-b border-[#B2DFDB]">
          <h2 className="text-xl font-bold text-[#263238]">
            All Users
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            View and manage registered users.
          </p>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="py-16 text-center px-4">

            <div className="w-14 h-14 mx-auto rounded-full bg-[#E0F2F1] flex items-center justify-center text-3xl mb-3">
              🔍
            </div>

            <h3 className="text-lg font-semibold text-[#263238]">
              No users found
            </h3>

            <p className="text-gray-500 mt-1">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>
                <tr className="bg-[#E8F5F3] border-b border-[#B2DFDB]">

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    User
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Mobile
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Role
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Status
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Joined
                  </th>

                  <th className="text-right px-5 py-4 text-sm font-semibold text-[#37474F]">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[#E0F2F1] hover:bg-[#F8FAFA] transition"
                  >

                    {/* User */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] border border-[#B2DFDB] text-[#263238] flex items-center justify-center font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-[#263238]">
                            {user.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {user.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Mobile */}
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {user.mobile}
                    </td>

                    {/* Role */}
                    <td className="px-5 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          user.role === "admin"
                            ? "bg-[#D9F0ED] text-[#263238]"
                            : "bg-[#E0F2F1] text-[#263238]"
                        }`}
                      >
                        {user.role}
                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">

                      <select
                        value={user.status}
                        onChange={(e) =>
                          handleStatusChange(
                            user.id,
                            e.target.value as
                              | "active"
                              | "inactive"
                          )
                        }
                        className={`px-3 py-2 rounded-lg text-xs font-medium border outline-none ${
                          user.status === "active"
                            ? "bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]"
                            : "bg-[#ECEFF1] text-[#546E7A] border-[#CFD8DC]"
                        }`}
                      >
                        <option value="active">
                          Active
                        </option>

                        <option value="inactive">
                          Inactive
                        </option>
                      </select>

                    </td>

                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {user.joinedDate}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <Link
                          to={`/admin/users/${user.id}`}
                          className="px-3 py-2 rounded-lg bg-[#E0F2F1] text-[#263238] hover:bg-[#CCEBE7] text-sm font-medium transition"
                        >
                          View
                        </Link>

                        <Link
                          to={`/admin/users/${user.id}/edit`}
                          className="px-3 py-2 rounded-lg bg-[#FFF3E0] text-[#E65100] hover:bg-[#FFE0B2] text-sm font-medium transition"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(user.id)}
                          className="px-3 py-2 rounded-lg bg-[#FFEBEE] text-[#C62828] hover:bg-[#FFCDD2] text-sm font-medium transition"
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

      {/* Back */}
      <div className="mt-6">
        <Link
          to="/admin"
          className="text-[#388E3C] font-semibold hover:underline"
        >
          ← Back to Admin Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserList;