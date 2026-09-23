import {
  Home,
  LandPlot,
  FileText,
  HelpCircle,
  Phone,
  X,
  Sprout,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const menuItems = [
    {
      path: "/",
      label: "मुख्यपृष्ठ",
      icon: Home,
    },
    {
      path: "/problems",
      label: "कायदेशीर समस्या",
      icon: LandPlot,
    },
    {
      path: "/documents",
      label: "कागदपत्रे",
      icon: FileText,
    },
    {
      path: "/help",
      label: "मदत व संपर्क",
      icon: HelpCircle,
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-emerald-100 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-emerald-100 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white">
              <Sprout size={22} />
            </div>

            <div>
              <p className="font-bold text-emerald-950">
                शेतकरी सहाय्य
              </p>

              <p className="text-xs text-slate-500">
                कायदेशीर मार्गदर्शन
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Farmer Box */}
        <div className="m-4 rounded-2xl bg-emerald-50 p-4">
          <div className="mb-2 text-2xl">🌾</div>

          <h3 className="font-bold text-emerald-900">
            शेतकऱ्यांसाठी मदत
          </h3>

          <p className="mt-1 text-sm leading-5 text-emerald-800">
            जमीन, ७/१२, वारसा, कर्ज आणि सरकारी योजनांबाबत मार्गदर्शन.
          </p>
        </div>

        {/* Menu */}
        <nav className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 font-semibold transition ${
                    isActive
                      ? "bg-emerald-800 text-white"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  }`
                }
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Emergency */}
        <div className="absolute bottom-5 left-4 right-4 rounded-2xl bg-orange-50 p-4">
          <div className="flex items-center gap-2 text-orange-900">
            <Phone size={18} />
            <p className="font-bold">तातडीची मदत</p>
          </div>

          <p className="mt-1 text-xs text-orange-800">
            कायदेशीर सहाय्यासाठी संपर्क करा
          </p>

          <a
            href="tel:15100"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 font-bold text-white"
          >
            <Phone size={18} />
            15100 वर कॉल करा
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;