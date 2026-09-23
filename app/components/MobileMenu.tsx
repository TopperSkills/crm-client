import { Link, useLocation } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const MobileMenu = ({
  open,
  onClose,
}: MobileMenuProps) => {
  const location = useLocation();

  if (!open) {
    return null;
  }

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Enquiries",
      path: "/enquiries",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="md:hidden fixed inset-0 z-[90]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="absolute top-16 right-0 w-72 bg-[#163A2B] border-l border-[#2E5D48] shadow-2xl min-h-[calc(100vh-64px)] p-5">

        {/* Menu Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-white font-bold text-lg">
              CRM
            </p>

            <p className="text-[#81C784] text-xs">
              MANAGEMENT SYSTEM
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-[#24543E] text-[#81C784] hover:bg-[#2E5D48] hover:text-white transition"
          >
            ✕
          </button>

        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2">

          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`
                  px-4
                  py-3
                  rounded-lg
                  font-medium
                  transition
                  ${
                    active
                      ? "bg-[#4CAF50] text-white"
                      : "text-[#C8E6C9] hover:bg-[#24543E] hover:text-white"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

        </nav>

        {/* Sign In */}
        <div className="mt-6 pt-6 border-t border-[#2E5D48]">

          <Link
            to="/signin"
            onClick={onClose}
            className="block w-full text-center bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold py-3 rounded-lg transition"
          >
            Sign In
          </Link>

        </div>

      </div>
    </div>
  );
};

export default MobileMenu;