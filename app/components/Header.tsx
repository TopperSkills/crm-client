import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAuthStore from "../store/authStore";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    setMenuOpen(false);
    navigate("/", { replace: true });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full
        bg-[#163A2B]
        border-b border-[#2E5D48]
        shadow-lg
        sticky top-0 z-50
      "
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="h-16 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setProfileOpen(false)}
            >
              {/* Logo Box */}
              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-[#4CAF50]
                  flex items-center justify-center
                  text-white
                  font-bold
                  text-lg
                  shadow-md
                "
              >
                C
              </div>

              {/* Logo Text */}
              <div>
                <h1 className="text-lg font-bold text-white leading-none">
                  CRM
                </h1>

                <p className="text-[10px] text-[#81C784] mt-1 tracking-wide">
                  MANAGEMENT SYSTEM
                </p>
              </div>
            </Link>
          </motion.div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden md:flex items-center gap-1">

            {/* HOME - Always Visible */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/"
                className="
                  px-4 py-2.5
                  rounded-lg
                  text-[#C8E6C9]
                  font-medium
                  hover:bg-[#24543E]
                  hover:text-white
                  transition-all
                "
              >
                Home
              </Link>
            </motion.div>

            {/* ================= NOT LOGGED IN ================= */}
            {!isAuthenticated ? (
              <>
                {/* Sign Up */}
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/signup"
                    className="
                      px-4 py-2.5
                      rounded-lg
                      text-[#C8E6C9]
                      font-medium
                      hover:bg-[#24543E]
                      hover:text-white
                      transition-all
                    "
                  >
                    Sign Up
                  </Link>
                </motion.div>

                {/* Sign In */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-3"
                >
                  <Link
                    to="/signin"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-5
                      py-2.5
                      rounded-lg
                      bg-[#4CAF50]
                      text-white
                      font-semibold
                      shadow-md
                      hover:bg-[#388E3C]
                      hover:shadow-lg
                      transition-all
                    "
                  >
                    Sign In
                  </Link>
                </motion.div>
              </>
            ) : (
              <>
                {/* ================= LOGGED IN ================= */}

                {/* Dashboard */}
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/dashboard"
                    className="
                      px-4 py-2.5
                      rounded-lg
                      text-[#C8E6C9]
                      font-medium
                      hover:bg-[#24543E]
                      hover:text-white
                      transition-all
                    "
                  >
                    Dashboard
                  </Link>
                </motion.div>

                {/* Enquiries */}
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/enquiries"
                    className="
                      px-4 py-2.5
                      rounded-lg
                      text-[#C8E6C9]
                      font-medium
                      hover:bg-[#24543E]
                      hover:text-white
                      transition-all
                    "
                  >
                    Enquiries
                  </Link>
                </motion.div>

                {/* Profile */}
                {/* <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to="/profile"
                    className="
                      px-4 py-2.5
                      rounded-lg
                      text-[#C8E6C9]
                      font-medium
                      hover:bg-[#24543E]
                      hover:text-white
                      transition-all
                    "
                  >
                    Profile
                  </Link>
                </motion.div> */}

                {/* ================= USER DROPDOWN ================= */}
                <div className="relative ml-3">

                  <button
                    type="button"
                    onClick={() =>
                      setProfileOpen(!profileOpen)
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-[#24543E]
                      transition-all
                    "
                  >
                    {/* Avatar */}
                    <div
                      className="
                        w-9 h-9
                        rounded-full
                        bg-[#4CAF50]
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                      "
                    >
                      {user?.name
                        ?.charAt(0)
                        .toUpperCase() || "U"}
                    </div>

                    {/* User Info */}
                    <div className="text-left hidden lg:block">
                      <p className="text-white text-sm font-semibold">
                        {user?.name || "User"}
                      </p>

                      <p className="text-[#81C784] text-xs capitalize">
                        {user?.role || "User"}
                      </p>
                    </div>

                    <span className="text-[#C8E6C9] text-xs">
                      ▼
                    </span>
                  </button>

                  {/* Dropdown */}
                  {profileOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="
                        absolute
                        right-0
                        mt-2
                        w-52
                        bg-white
                        rounded-xl
                        shadow-xl
                        border border-[#B2DFDB]
                        overflow-hidden
                      "
                    >
                      {/* Profile */}
                      <Link
                        to="/profile"
                        onClick={() =>
                          setProfileOpen(false)
                        }
                        className="
                          block
                          px-4 py-3
                          text-[#37474F]
                          hover:bg-[#E0F2F1]
                          transition
                        "
                      >
                        👤 Profile
                      </Link>

                      {/* Change Password */}
                      <Link
                        to="/change-password"
                        onClick={() =>
                          setProfileOpen(false)
                        }
                        className="
                          block
                          px-4 py-3
                          text-[#37474F]
                          hover:bg-[#E0F2F1]
                          transition
                        "
                      >
                        🔐 Change Password
                      </Link>

                      {/* Divider */}
                      <div className="border-t border-[#B2DFDB]" />

                      {/* Logout */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="
                          w-full
                          text-left
                          px-4 py-3
                          text-red-600
                          hover:bg-red-50
                          transition
                        "
                      >
                        🚪 Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              </>
            )}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-10 h-10
              rounded-lg
              bg-[#24543E]
              text-[#81C784]
              text-2xl
              flex
              items-center
              justify-center
              hover:bg-[#2E5D48]
              hover:text-white
              transition-all
            "
          >
            {menuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="
            md:hidden
            bg-[#163A2B]
            border-t border-[#2E5D48]
            px-6 py-4
          "
        >
          <div className="flex flex-col gap-2">

            {/* Home - Always Visible */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="
                px-4 py-3
                rounded-lg
                text-[#C8E6C9]
                hover:bg-[#24543E]
                hover:text-white
                transition
              "
            >
              Home
            </Link>

            {!isAuthenticated ? (
              <>
                {/* Sign Up */}
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    text-[#C8E6C9]
                    hover:bg-[#24543E]
                    hover:text-white
                    transition
                  "
                >
                  Sign Up
                </Link>

                {/* Sign In */}
                <Link
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    bg-[#4CAF50]
                    text-white
                    font-semibold
                    text-center
                  "
                >
                  Sign In
                </Link>
              </>
            ) : (
              <>
                {/* Dashboard */}
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    text-[#C8E6C9]
                    hover:bg-[#24543E]
                    hover:text-white
                    transition
                  "
                >
                  Dashboard
                </Link>

                {/* Enquiries */}
                <Link
                  to="/enquiries"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    text-[#C8E6C9]
                    hover:bg-[#24543E]
                    hover:text-white
                    transition
                  "
                >
                  Enquiries
                </Link>

                {/* Profile */}
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    text-[#C8E6C9]
                    hover:bg-[#24543E]
                    hover:text-white
                    transition
                  "
                >
                  Profile
                </Link>

                {/* Change Password */}
                <Link
                  to="/change-password"
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4 py-3
                    rounded-lg
                    text-[#C8E6C9]
                    hover:bg-[#24543E]
                    hover:text-white
                    transition
                  "
                >
                  🔐 Change Password
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    px-4 py-3
                    rounded-lg
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-semibold
                    transition
                  "
                >
                  🚪 Logout
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;