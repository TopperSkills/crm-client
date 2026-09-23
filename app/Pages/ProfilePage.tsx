import { UserRound } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <UserRound size={30} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                माझे प्रोफाइल
              </h1>

              <p className="text-sm text-slate-500">
                तुमची माहिती येथे व्यवस्थापित करा.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              प्रोफाइल माहिती
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              कृपया साइन इन करा.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;