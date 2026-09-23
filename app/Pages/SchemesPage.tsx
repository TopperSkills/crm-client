const SchemesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-slate-900">
          सरकारी योजना
        </h1>

        <p className="mt-2 text-slate-500">
          शेतकऱ्यांसाठी उपलब्ध सरकारी योजना आणि अनुदानाची माहिती.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {[
            "शेतकरी योजना",
            "कृषी अनुदान",
            "पीक विमा",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">🌾</div>

              <h2 className="mt-4 font-bold text-slate-900">
                {item}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                या योजनेबद्दल अधिक माहिती लवकरच उपलब्ध होईल.
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SchemesPage;