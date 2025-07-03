export function Sponsors() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Sponsors</h1>
        <p className="max-w-2xl text-gray-on-white">
          We're carefully curating a sponsor expo & non-exhibiting sponsors who are relevant,
          interesting, and pushing the boundaries of the AI Engineering ecosystem. These are the
          companies that are building & innovating with AI — from Devtools & Infra to Vector DBs &
          Open Models.
        </p>
      </header>

      <div className="text-center space-y-6 p-8 bg-stone-200 rounded-2xl">
        <p className="text-gray-600">
          We are currently finalizing our sponsor list. If you would like to sponsor information
          let's{" "}
          <a
            href="https://tally.so/r/w2YAdM"
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
          >
            connect
          </a>
        </p>
        <p className="text-gray-600">
          You can view our previous supporters at:{" "}
          <a href="/" className="text-blue-500 hover:text-blue-400">
            World's Fair 2025
          </a>{" "}
          and{" "}
          <a href="/summit/2025" className="text-blue-500 hover:text-blue-400">
            Summit 2025
          </a>
        </p>
      </div>
    </div>
  );
}
