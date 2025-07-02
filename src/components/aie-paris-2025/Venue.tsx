import Image from "next/image";
import { PiGlobe } from "react-icons/pi";
import { TbBuildingSkyscraper, TbMap } from "react-icons/tb";

import imgVenue1 from "~/images/worldsfair-2025/hotel/venue-1.jpg";
import imgVenue2 from "~/images/worldsfair-2025/hotel/venue-2.png";
import imgVenue3 from "~/images/worldsfair-2025/hotel/venue-3.jpg";
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
              href="https://maps.app.goo.gl/JzxPJzbk6p9Pu7Bw8"
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
            <a
              className="flex-1 underline font-bold"
              href="https://www.marriott.com/en-us/hotels/sfodt-san-francisco-marriott-marquis/overview/"
              target="_blank"
            >
              Venue Website
            </a>
          </div>
        </div>
      </header>

      <div className="flex gap-12 max-lg:flex-col items-center">
        <div className="lg:flex-1">
          <Image src={imgVenue1} alt="Workshop Attendees" className="rounded-3xl" />
        </div>
        <div className="lg:flex-1 space-y-3">
          <p className="text-gray-on-white text-base">
            One of the largest hotels in the city, and conveniently located downtown near public
            transportation and plenty of cafes, restaurants, bars, and sights, the Marriott Marquis
            (780 Mission St, San Francisco, CA 94103) was our choice to host the first AI Engineer
            World's Fair in 2024 and we are excited to return!
          </p>
          <p className="text-gray-on-white text-base">
            The hotel's Yerba Buena Ballroom is the largest pillarless ballroom west of Las Vegas,
            and will serve as a centralized, comfortable location for keynotes, breakout sessions,
            the expo, networking, and food. One floor above is the Golden Gate Ballroom, serving as
            a dedicated space for workshops & breakout talks. Plenty of other salons and breakout
            rooms will serve as Expo Sessions and additional meeting space.
          </p>
        </div>
      </div>
    </div>
  );
}
