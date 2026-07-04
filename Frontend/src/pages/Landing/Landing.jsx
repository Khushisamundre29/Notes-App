import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Create",
      desc: "Start a new note in one click, no setup or template needed.",
      icon: (
        <path d="M4 20l3.5-1 10-10a2 2 0 0 0-3-3l-10 10L4 20z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      ),
    },
    {
      title: "Pin",
      desc: "Keep the notes you use most at the top of your list.",
      icon: (
        <path d="M12 3v6m0 0l4 4h-3v6h-2v-6H8l4-4z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      ),
    },
    {
      title: "Search",
      desc: "Find any note instantly by typing a few words.",
      icon: (
        <>
          <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
      ),
    },
    {
      title: "Delete",
      desc: "Remove notes you no longer need, whenever you want.",
      icon: (
        <path d="M5 7h14M9 7V5h6v2m-8 0l1 13h8l1-13" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-paper">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-14 py-6 max-w-6xl mx-auto border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white text-xs font-display bg-primary">
            N
          </div>
          <span className="font-display text-[17px] text-ink">NoteApp</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-[13px] font-medium text-graphite hover:text-ink transition-colors"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button
            className="text-[13px] font-medium text-white px-4 py-2 rounded-[4px] bg-ink hover:opacity-90 transition-opacity"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-14 pt-10 md:pt-16 pb-20 grid md:grid-cols-[1fr_1fr] gap-14 items-center">
        <div>
          <p className="font-mono text-[11px] uppercase mb-5 text-primary">
            A quiet place for your thoughts
          </p>
          <h1 className="font-display text-[2.6rem] md:text-[3.2rem] leading-[1.08] mb-6 text-ink">
            Write it down.
            <br />
            <span className="italic text-primary">Find it later.</span>
          </h1>
          <p className="text-[15px] md:text-base leading-relaxed mb-8 max-w-sm text-graphite">
            Create notes, pin the ones that matter, search across all of them instantly, and delete what you don't need anymore.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              className="text-sm font-medium text-white px-6 py-3 rounded-[4px] bg-ink hover:opacity-90 transition-opacity"
              onClick={() => navigate("/signup")}
            >
              Sign up free
            </button>
        
          </div>
        </div>

        {/* right: signature — pinned index-card stack */}
        <div className="relative h-[340px] md:h-[380px] flex items-center justify-center">
          <div
            className="absolute w-[220px] h-[150px] bg-white rounded-[6px] border border-line card-shadow"
            style={{ transform: "rotate(9deg) translate(70px, 10px)" }}
          >
            <p className="text-[12px] px-4 pt-4 text-graphite">Trip: Goa, Dec</p>
          </div>
          <div
            className="absolute w-[230px] h-[160px] bg-white rounded-[6px] border border-line card-shadow"
            style={{ transform: "rotate(-8deg) translate(-70px, 18px)" }}
          >
            <p className="text-[12px] px-4 pt-4 text-graphite">Recipe: dal tadka</p>
          </div>

          <div
            className="relative w-[270px] md:w-[290px] bg-white rounded-[6px] border border-line card-shadow overflow-hidden ruled"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="margin-rule" />
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full pin-shadow bg-secondary" />
            <div className="pt-8 pb-6 pl-14 pr-5">
              <h3 className="font-display text-[16px] mb-3 text-ink">Launch checklist</h3>
              <div className="space-y-[13px] text-[13px] text-graphite">
                <p>— Fix login redirect bug</p>
                <p className="line-through opacity-60">— Deploy staging build</p>
                <p className="text-ink">
                  — Write release notes<span className="caret" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 md:px-14 py-14 border-t border-line">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-line">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start px-0 md:px-7 py-6">
              <svg width="22" height="22" viewBox="0 0 24 24" className="mb-4 shrink-0 text-primary">
                {f.icon}
              </svg>
              <h3 className="font-display text-[15px] mb-1.5 text-ink">{f.title}</h3>
              <p className="text-[13px] leading-relaxed text-graphite">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-14 pb-16">
        <div className="rounded-[10px] px-8 md:px-16 py-14 text-center bg-ink">
          <h2 className="font-display text-2xl md:text-[1.75rem] italic text-white mb-2">
            Start writing your first note
          </h2>
          <p className="text-sm mb-7 text-[#B8B4A8]">
            Free to use, no setup required.
          </p>
          <button
            className="text-sm font-semibold px-6 py-3 rounded-[4px] bg-paper text-ink hover:opacity-90 transition-opacity"
            onClick={() => navigate("/signup")}
          >
            Sign up free
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 md:px-14 py-7 border-t border-line text-center font-mono text-[11px] text-graphite">
        © 2025 NoteApp. Made this Because your brain has too many tabs open.
      </footer>
    </div>
  );
}

export default Landing;