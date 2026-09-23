const DocumentsPage = () => {
  return (
    <section className="px-6 py-12 lg:px-12">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Documents
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          आवश्यक कागदपत्रे
        </h1>

        <p className="mt-3 text-slate-500">
          विविध कायदेशीर प्रक्रियांसाठी लागणाऱ्या कागदपत्रांची माहिती.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {[
            ["📄", "७/१२ उतारा", "जमीन संबंधित प्रक्रियेसाठी"],
            ["🪪", "ओळखपत्र", "आधार / PAN इत्यादी"],
            ["📑", "करारपत्र", "करार आणि हमीपत्रासाठी"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{icon}</div>

              <h3 className="mt-4 font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DocumentsPage;