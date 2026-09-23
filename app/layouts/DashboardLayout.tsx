
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B4332]">

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-64 min-h-screen">

        {/* Mobile Header */}
        <header
          className="
            lg:hidden
            h-16
            bg-[#E8F5E9]
            border-b border-[#A5D6A7]
            shadow-sm
            flex items-center
            px-4
          "
        >

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="
              text-2xl
              text-[#2E7D32]
              hover:text-[#1B5E20]
              transition-colors
            "
          >
            ☰
          </button>

          {/* Header Title */}
          <div className="ml-4">
            <h1 className="font-bold text-[#1B4332]">
              Admin Panel
            </h1>

            <p className="text-xs text-[#689F38]">
              CRM Management
            </p>
          </div>

        </header>

        {/* Page Content */}
        <main
          className="
            w-full
            min-h-[calc(100vh-64px)]
            bg-[#F1F8E9]
          "
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
