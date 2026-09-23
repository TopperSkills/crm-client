import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-12">

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-2xl text-white">
            ✨
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            नवीन account तयार करा.
          </p>

        </div>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-900 px-4 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?

          <Link
            to="/signin"
            className="ml-1 font-semibold text-emerald-800 hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>

    </section>
  );
};

export default SignUpPage;