const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-slate-900">
          सेटिंग्ज
        </h1>

        <p className="mt-2 text-slate-500">
          भाषा आणि इतर app preferences व्यवस्थापित करा.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-bold text-slate-900">
            भाषा
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            तुमची आवडती भाषा निवडा.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;