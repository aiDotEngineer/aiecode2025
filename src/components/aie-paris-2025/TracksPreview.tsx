import React from "react";

export function TracksPreview() {
  return (
    <div className="space-y-12" id="tracks">
      <header className="text-center space-y-3">
        <h1 className="text-5xl mb-12">
          <b>Schedule and Speakers</b>
        </h1>
        <p className="max-w-xl m-auto text-gray-on-black text-justify mb-12">
          AI Engineer Paris is a single-track event featuring a curated lineup of technical talks
          and breakout workshops. Over two days, top AI engineers will gather to give practical
          talks on open-source models, AI agent workflows, high-performance inference, and the
          latest trends in AI engineering.
        </p>
        <p>
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          The speakers and full schedule are still being finalized - talks are yet to be announced!{" "}
          <br />
          <a
            href="https://sessionize.com/ai-engineer-paris/"
            target="_blank"
            className="text-blue-300 font-bold hover:text-blue-100"
          >
            Apply to speak here
          </a>
          !
        </p>
      </header>
    </div>
  );
}
