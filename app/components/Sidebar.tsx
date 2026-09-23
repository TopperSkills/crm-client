import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/signin");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-[#EFF6FF] text-[#2563EB] font-semibold"
        : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-[#E2E8F0] shadow-sm transform transition-transform duration-300
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >

        {/* Logo */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-[#E2E8F0]">
          <div>
            <h1 className="text-2xl font-bold text-[#2563EB]">
              CRM
            </h1>

            <p className="text-xs text-[#64748B]">
              Admin Panel
            </p>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden text-[#64748B] hover:text-[#2563EB] text-2xl"
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">

          <NavLink
            to="/admin"
            end
            className={navLinkClass}
            onClick={onClose}
          >
            <span className="text-lg">📊</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/users"
            className={navLinkClass}
            onClick={onClose}
          >
            <span className="text-lg">👥</span>
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/admin/users/add"
            className={navLinkClass}
            onClick={onClose}
          >
            <span className="text-lg">➕</span>
            <span>Add User</span>
          </NavLink>

          <NavLink
            to="/enquiries"
            className={navLinkClass}
            onClick={onClose}
          >
            <span className="text-lg">📩</span>
            <span>Enquiries</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={navLinkClass}
            onClick={onClose}
          >
            <span className="text-lg">👤</span>
            <span>Profile</span>
          </NavLink>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-[#E2E8F0]">

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition"
          >
            <span className="text-lg">🚪</span>
            <span className="font-medium">Logout</span>
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;