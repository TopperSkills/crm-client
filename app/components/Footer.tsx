import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        mt-auto
        bg-[#163A2B]
        text-white
        border-t border-[#2E7D32]
      "
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  w-11 h-11
                  rounded-xl
                  bg-[#4CAF50]
                  flex items-center justify-center
                  font-bold
                  text-white
                  shadow-md
                "
              >
                C
              </div>

              <h2 className="text-2xl font-bold text-white">
                CRM
              </h2>

            </div>

            <p className="text-[#C8E6C9] mt-4 leading-6 max-w-sm">
              Simple and powerful customer management system
              designed to manage customers and enquiries easily.
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 mt-5">

              <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />

              <span className="text-sm text-[#C8E6C9]">
                System Online
              </span>

            </div>
          </motion.div>


          {/* Quick Links */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="
                  text-[#C8E6C9]
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                className="
                  text-[#C8E6C9]
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Dashboard
              </Link>

              <Link
                to="/enquiries"
                className="
                  text-[#C8E6C9]
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Enquiries
              </Link>

              <Link
                to="/profile"
                className="
                  text-[#C8E6C9]
                  hover:text-white
                  hover:translate-x-1
                  transition-all
                "
              >
                Profile
              </Link>

            </div>
          </motion.div>


          {/* Contact */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-start gap-3">

                <div
                  className="
                    w-9 h-9
                    rounded-lg
                    bg-[#24543E]
                    flex items-center justify-center
                    text-[#81C784]
                  "
                >
                  ✉
                </div>

                <div>
                  <p className="text-xs text-[#81C784]">
                    Email
                  </p>

                  <p className="text-[#E8F5E9] text-sm mt-1">
                    support@crm.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-3">

                <div
                  className="
                    w-9 h-9
                    rounded-lg
                    bg-[#24543E]
                    flex items-center justify-center
                    text-[#81C784]
                  "
                >
                  ☎
                </div>

                <div>
                  <p className="text-xs text-[#81C784]">
                    Phone
                  </p>

                  <p className="text-[#E8F5E9] text-sm mt-1">
                    +91 9876543210
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>


        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            border-t
            border-[#2E5D48]
            mt-10
            pt-5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          <p className="text-sm text-[#A5D6A7]">
            © 2026 CRM Application. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm">

            <span className="text-[#A5D6A7]">
              Built with
            </span>

            <span className="font-semibold text-[#81C784]">
              React
            </span>

            <span className="text-[#A5D6A7]">
              & Tailwind CSS
            </span>

          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;