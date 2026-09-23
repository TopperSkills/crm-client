import { Link } from "react-router-dom";
import {
  Scale,
  Phone,
  ShieldCheck,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (

    <footer className="border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div className="lg:pr-6">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-md">
                <Scale size={25} strokeWidth={2} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-emerald-950 dark:text-emerald-300">
                  ग्राम-विधी सहाय्यक
                </h2>

                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Gramin Legal Sahayak
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
              ग्रामीण नागरिकांना सोप्या भाषेत कायदेशीर आणि सरकारी
              मार्गदर्शन मिळवून देण्यासाठी तयार केलेले विश्वासार्ह व्यासपीठ.
            </p>

            {/* Trust */}
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <ShieldCheck size={17} />
              सोपे • सुरक्षित • विश्वासार्ह
            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/"
                className="group flex items-center justify-between text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Home
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/problems"
                className="group flex items-center justify-between text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Legal Problems
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/documents"
                className="group flex items-center justify-between text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Documents
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/schemes"
                className="group flex items-center justify-between text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Government Schemes
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

            </div>

          </div>


          {/* ================= SUPPORT ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              Support
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/help"
                className="block text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Help & Support
              </Link>

              <Link
                to="/privacy"
                className="block text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Terms & Conditions
              </Link>

              <a
                href="mailto:support@gramlegal.in"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Mail size={16} />
                Contact Us
              </a>

            </div>

          </div>


          {/* ================= EMERGENCY ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              Emergency Help
            </h3>

            <div className="mt-5 space-y-3">

              {/* Legal */}
              <a
                href="tel:15100"
                className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Legal Help
                  </p>

                  <p className="font-bold text-emerald-800 dark:text-emerald-400">
                    15100
                  </p>
                </div>

              </a>


              {/* Cyber */}
              <a
                href="tel:1930"
                className="flex items-center gap-3 rounded-2xl border border-red-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md dark:border-red-900/40 dark:bg-slate-800"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Cyber Fraud
                  </p>

                  <p className="font-bold text-red-700 dark:text-red-400">
                    1930
                  </p>
                </div>

              </a>


              {/* Location */}
              <div className="flex items-start gap-2 pt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-700" />
                <span>
                  Accessible legal guidance
                  <br />
                  for rural communities
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-12 border-t border-emerald-100 pt-6 dark:border-slate-800">

          <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Gramin Legal Sahayak. All rights reserved.
            </p>

            <p className="flex items-center gap-1">
              Made with
              <Heart
                size={13}
                className="fill-current text-red-500"
              />
              for rural communities
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;