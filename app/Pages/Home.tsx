import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: "👥",
      title: "User Management",
      description: "Create, update and manage users from one place.",
      bg: "bg-[#E0F2F1]",
    },
    {
      icon: "📩",
      title: "Enquiry Management",
      description: "Track enquiries, update status and assign users.",
      bg: "bg-[#E8F5F3]",
    },
    {
      icon: "📊",
      title: "Dashboard",
      description: "Get a quick overview of your CRM activities.",
      bg: "bg-[#D9F0ED]",
    },
    {
      icon: "⚙️",
      title: "Admin Panel",
      description: "Manage departments, users and CRM operations.",
      bg: "bg-[#CCEBE7]",
    },
  ];

  return (
    <div className="bg-[#F4F8F7]">

      {/* ================= HERO ================= */}
      <section className="overflow-hidden">
        <div className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#388E3C] font-bold text-sm tracking-wider mb-3"
              >
                CRM APPLICATION
              </motion.p>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#263238] leading-tight"
              >
                Manage Your
                <span className="block text-[#388E3C]">
                  Customers Easily
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl"
              >
                Manage users, enquiries, departments and customer
                information from one simple and powerful CRM application.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/signup"
                    className="bg-[#263238] text-white px-7 py-3.5 rounded-lg text-center hover:bg-[#37474F] transition block font-semibold shadow-md"
                  >
                    Get Started →
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/signin"
                    className="border border-[#263238] text-[#263238] px-7 py-3.5 rounded-lg text-center hover:bg-[#E0F2F1] transition block font-semibold"
                  >
                    Sign In
                  </Link>
                </motion.div>
              </motion.div>

              {/* Small trust text */}
              <div className="mt-7 flex flex-wrap gap-5 text-sm text-gray-500">
                <span>✓ Easy to use</span>
                <span>✓ Secure access</span>
                <span>✓ Centralized management</span>
              </div>
            </motion.div>

            {/* Right Dashboard Preview */}
           <motion.div
  initial={{ x: 60, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#80CBC4]/20 rounded-full blur-2xl" />
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-2xl" />

  <motion.div
    whileHover={{ y: -6 }}
    className="relative bg-white rounded-2xl shadow-xl border border-[#B2DFDB] p-8"
  >
    <div className="w-16 h-16 rounded-2xl bg-[#E0F2F1] flex items-center justify-center text-3xl">
      👥
    </div>

    <h2 className="text-2xl font-bold text-[#263238] mt-6">
      Manage Your Customers
    </h2>

    <p className="text-gray-600 mt-3 leading-relaxed">
      Keep customer information, enquiries and users organized
      in one centralized CRM system.
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4">
      <div className="bg-[#E8F5F3] rounded-xl p-4">
        <p className="text-2xl">👤</p>
        <p className="font-semibold text-[#263238] mt-2">
          Users
        </p>
      </div>

      <div className="bg-[#D9F0ED] rounded-xl p-4">
        <p className="text-2xl">📩</p>
        <p className="font-semibold text-[#263238] mt-2">
          Enquiries
        </p>
      </div>

      <div className="bg-[#CCEBE7] rounded-xl p-4">
        <p className="text-2xl">⚙️</p>
        <p className="font-semibold text-[#263238] mt-2">
          Management
        </p>
      </div>

      <div className="bg-[#E0F2F1] rounded-xl p-4">
        <p className="text-2xl">🔒</p>
        <p className="font-semibold text-[#263238] mt-2">
          Secure
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20">
        <div className="px-6 sm:px-10 lg:px-16">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#388E3C] font-semibold text-sm tracking-wider">
              POWERFUL FEATURES
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] mt-2">
              Everything You Need in One Place
            </h2>

            <p className="text-gray-600 mt-4">
              Simplify your daily CRM operations with easy-to-use
              tools designed for efficient customer management.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${feature.bg} rounded-2xl p-6 border border-[#B2DFDB] transition shadow-sm hover:shadow-lg`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                  {feature.icon}
                </div>

                <h3 className="mt-5 font-bold text-lg text-[#263238]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CRM ================= */}
      <section className="bg-[#F4F8F7] py-20">
        <div className="px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-[#388E3C] font-semibold text-sm tracking-wider">
                WHY USE OUR CRM?
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] mt-2">
                Make Customer Management Simple
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Keep your users, enquiries and business information
                organized in one centralized system.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Centralized customer information",
                  "Easy enquiry tracking",
                  "User and department management",
                  "Simple and responsive interface",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#263238] text-white flex items-center justify-center text-sm">
                      ✓
                    </div>

                    <p className="text-[#37474F] font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#263238] rounded-2xl p-8 text-white shadow-xl">
              <p className="text-[#80CBC4] font-semibold text-sm">
                CRM MANAGEMENT
              </p>

              <h3 className="text-3xl font-bold mt-3">
                One Platform.
                <span className="block text-[#80CBC4]">
                  Complete Control.
                </span>
              </h3>

              <p className="text-[#CFD8DC] mt-5 leading-relaxed">
                Manage your complete customer workflow from user
                registration to enquiry assignment and status tracking.
              </p>

              <Link
                to="/signup"
                className="inline-block mt-7 bg-[#80CBC4] text-[#263238] px-6 py-3 rounded-lg font-semibold hover:bg-[#B2DFDB] transition"
              >
                Start Now →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#163A2B] py-16">
        <div className="px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Manage Your CRM?
          </h2>

          <p className="text-[#C8E6C9] mt-3">
            Create your account and start managing your customers today.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-7 bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;