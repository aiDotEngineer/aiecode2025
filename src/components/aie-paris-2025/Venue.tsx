import Image from "next/image";
import { PiGlobe } from "react-icons/pi";
import { TbBuildingSkyscraper, TbMap } from "react-icons/tb";

import imgVenue from "~/images/aie-paris-2025/venue.jpg";
import { Button } from "../Button";

export function VenueAndHotel() {
  return (
    <div className="space-y-12" id="venue">
      <header className="space-y-4" id="hotels">
        <div className="text-gray-on-white text-2xl">Venue</div>
        <h1 className="text-6xl font-bold">Station F</h1>
        <div className="flex  gap-1 flex-col md:flex-row md:gap-3 md:items-center">
          <div className="flex gap-3 items-center">
            <span className="text-2xl">
              <TbMap />
            </span>
            <a
              className="flex-1 underline font-bold"
              href="https://maps.app.goo.gl/tsA3TkmxKBJkrxDf9"
              target="_blank"
            >
              Map
            </a>
          </div>
          <span className="w-px h-5 max-md:hidden bg-slate-400" />
          <div className="flex gap-3 items-center">
            <span className="text-2xl">
              <PiGlobe />
            </span>
            <a className="flex-1 underline font-bold" href="https://stationf.co/" target="_blank">
              Venue Website
            </a>
          </div>
        </div>
      </header>

      <div className="flex gap-12 max-lg:flex-col items-center">
        <div className="lg:flex-1">
          <Image src={imgVenue} alt="Workshop Attendees" className="rounded-3xl" />
        </div>
        <div className="lg:flex-1 space-y-3">
          <p className="text-gray-on-white text-base">
            Station F is the world's largest startup campus, home to more than
            1,000 startups and a wide range of technology programs. Widely recognized as a hub for
            AI innovation, it features dedicated accelerators and collaborative spaces designed to
            unite leading AI startups, researchers, and industry partners—driving forward pioneering
            projects and rapid advancements in artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
