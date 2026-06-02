import CVenglish from "../assets/CV/CV_Jeff_english.pdf";

function CV() {
  const pdfUrl = CVenglish;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Jeff_english.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-radial-[at_70%_15%] from-violet-800 to-slate-950 to-75% py-30 px-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-violet-200">
              My Curriculum
            </h2>

            
          </div>

          <button
            onClick={handleDownload}
            className="mt-4 md:mt-0 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:bg-violet-500 transition"
          >
            Download PDF
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border opacity-60 shadow-2xl">
          <iframe
            src={pdfUrl}
            title="Vista previa PDF"
            className="h-[800px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default CV;