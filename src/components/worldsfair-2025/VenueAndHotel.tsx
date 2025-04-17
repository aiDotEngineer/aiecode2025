import Image from 'next/image';
import { PiGlobe } from 'react-icons/pi';
import { TbBuildingSkyscraper, TbMap } from 'react-icons/tb';

import imgVenue1 from '~/images/worldsfair-2025/hotel/venue-1.jpg';
import imgVenue2 from '~/images/worldsfair-2025/hotel/venue-2.png';
import imgVenue3 from '~/images/worldsfair-2025/hotel/venue-3.jpg';
import { Button } from '../Button';

export function VenueAndHotel() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="text-gray-on-white text-2xl">Venue & Hotel</div>
        <h1 className="text-6xl font-bold">The Marriott Marquis</h1>
        <div className="flex  gap-1 flex-col md:flex-row md:gap-3 md:items-center">
          <div className="flex gap-3 items-center">
            <span className="text-2xl">
              <TbBuildingSkyscraper />
            </span>
            <a
              className="flex-1 underline font-bold"
              href="https://book.passkey.com/event/50930341/owner/628/home"
              target="_blank"
            >
              Reserve your room at our preferred rate
            </a>
          </div>
          <span className="w-px h-5 max-md:hidden bg-slate-400" />
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
              Hotel Website
            </a>
          </div>
        </div>
      </header>

      <div className="flex gap-12 max-lg:flex-col items-center">
        <div className="lg:flex-1">
          <Image
            src={imgVenue1}
            alt="Workshop Attendees"
            className="rounded-3xl"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <p className="text-gray-on-white text-base">
            One of the largest hotels in the city, and conveniently located
            downtown near public transportation and plenty of cafes,
            restaurants, bars, and sights, the Marriott Marquis (780 Mission 
            St, San Francisco, CA 94103) was our choice to host the first AI 
            Engineer World's Fair in 2024 and we are excited to return!
          </p>
          <p className="text-gray-on-white text-base">
            The hotel's Yerba Buena Ballroom is the largest pillarless ballroom
            west of Las Vegas, and will serve as a centralized, comfortable
            location for keynotes, breakout sessions, the expo, networking, and
            food. One floor above is the Golden Gate Ballroom, serving as a
            dedicated space for workshops & breakout talks. Plenty of other
            salons and breakout rooms will serve as Expo Sessions and additional
            meeting space.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-12 max-lg:flex-col">
        <div className="lg:flex-1 space-y-10">
          <Image
            src={imgVenue2}
            alt="Workshop Attendees"
            className="rounded-3xl"
          />
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">
              View Lounge: VIP Exclusive
            </h2>
            <p className="text-gray-on-white text-base">
              Speakers and Attendees who purchase the AI Leadership pass get 
              exclusive access to the AI Architects track, which utilizes the
              top-floor View Lounge as a VIP welcome reception on June 3rd in 
              addition to daytime facilitated discussions & open networking on 
              the 4th and 5th.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 space-y-10">
          <Image
            src={imgVenue3}
            alt="Workshop Attendees"
            className="rounded-3xl"
          />
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Hotel Rooms</h2>
            <p className="text-gray-on-white text-base">
              We have limited hotel number of rooms at the Marriott Marquis (also the conf venue) 
              available for a negotiated rate of $399 from May 29-Jun 7. 
              We also have a limited number of overflow hotel rooms at the Beacon Grand, a 10-minute walk away, for
              $289 - Type in Group Code: <span className="font-mono font-bold">0601AEWF</span>!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="inline-flex flex-col gap-6 md:flex-row items-center">
          <b>Book your hotel room today with our discounts:</b>
          <div className="space-x-6">
            <Button
              invert
              border
              href="https://book.passkey.com/event/50930341/owner/628/home"
              target="_blank"
            >
              Marriott Marquis
            </Button>
            
            <Button
              invert
              border
              href="https://www.beacongrand.com/group-blocks"
              target="_blank"
            >
              Beacon Grand (Code: 0601AEWF)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
