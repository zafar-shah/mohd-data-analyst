const skills = ["SQL", "Python", "Power BI", "Excel", "Data Visualization"]

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-24 bg-blue-700" aria-hidden="true" />

        <div className="-mt-12 flex flex-col items-center px-6 pb-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-700 text-3xl font-semibold text-white shadow-md">
            MZ
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-slate-900">Mohd Shaha Zafar</h1>
          <p className="mt-1 font-medium text-blue-700">Aspiring Data Analyst</p>

          <p className="mt-5 text-pretty leading-relaxed text-slate-600">
            I am a B.Tech Computer Science graduate with skills in SQL, Python, Power BI, Excel, and data
            visualization. I am looking for opportunities to start my career as a Data Analyst.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Skills">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
              >
                {skill}
              </li>
            ))}
          </ul>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <LinkedInIcon className="h-5 w-5" />
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}
