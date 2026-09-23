const RightsPage = () => {
  const rights = [
    "जमिनीशी संबंधित मूलभूत हक्क",
    "वारसा हक्क",
    "शेतजमिनीच्या कागदपत्रांची माहिती",
    "कर्ज आणि बँकिंगशी संबंधित हक्क",
    "ग्राहकांचे मूलभूत हक्क",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-3xl font-bold text-slate-900">
          कायदे व हक्क
        </h1>

        <p className="mt-2 text-slate-500">
          शेतकऱ्यांना उपयोगी ठरणारी मूलभूत कायदेशीर माहिती.
        </p>

        <div className="mt-8 space-y-3">
          {rights.map((right, index) => (
            <div
              key={right}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 font-bold text-emerald-700">
                {index + 1}
              </span>

              <span className="font-semibold text-slate-800">
                {right}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RightsPage;