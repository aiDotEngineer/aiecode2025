import Image from 'next/image';
import { PiGlobe } from 'react-icons/pi';
import { TbMap } from 'react-icons/tb';

// Use placeholder images
const imgVenue1 = "/home-hero-bg.jpg";
const imgVenue2 = "/home-hero-bg.jpg";
const imgVenue3 = "/home-hero-bg.jpg";
import { Button } from '../Button';

const bookingUrl = '';
const hotelUrl =
  'https://www.marriott.com/en-us/hotels/nycsg-renaissance-new-york-midtown-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0';
const mapUrl =
  'https://www.google.com/maps/place/Renaissance+New+York+Midtown+Hotel/@40.7518386,-73.9913676,18.3z/data=!3m1!5s0x89c259ac257b0a9f:0x9d84e9c4f76d808b!4m9!3m8!1s0x89c259ac25708a0f:0x1db04f051393aad2!5m2!4m1!1i2!8m2!3d40.7517558!4d-73.9910886!16s%2Fg%2F11cjkgrzwk!5m1!1e2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D';

export function VenueAndHotel() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="text-gray-on-white text-2xl">Venue & Hotel</div>
        <h1 className="text-6xl font-bold">
          Renaissance New York Midtown Hotel
        </h1>
        <div className="flex  gap-1 flex-col md:flex-row md:gap-3 md:items-center">
          {/* <div className="flex gap-3 items-center">
						<span className="text-2xl">
							<TbBuildingSkyscraper />
						</span>
						<a
							className="flex-1 underline font-bold"
							href={bookingUrl}
							target="_blank"
						>
							Reserve your room at our preferred rate
						</a>
					</div> */}
          {/* <span className="w-px h-5 max-md:hidden bg-slate-400" /> */}
          <div className="flex gap-3 items-center">
            <span className="text-2xl">
              <TbMap />
            </span>
            <a
              className="flex-1 underline font-bold"
              href={mapUrl}
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
              href={hotelUrl}
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
            src={imgVenue3}
            alt="Workshop Attendees"
            className="rounded-3xl w-full h-[400px] object-cover"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <p className="text-gray-on-white text-base">
            The Renaiassance New York Midtown Hotel sits at the epicenter of
            NYC's Garment District, the creative community that defines what the
            world wears. Renaissance New York Midtown Hotel is one of the most
            unique hotels in New York City boasting a "living building" that
            changes with the seasons and a rooftop terrace that transforms every
            hour on the hour.
          </p>
          <p className="text-gray-on-white text-base">
            When it's time to unwind, visit VERSA on the fifth floor.
            Celebrating the melting pot that is Midtown Manhattan, the hotel
            restaurant offers an eclectic menu and exceptional cocktails for
            breakfast, lunch and dinner. If you prefer the outdoors, step out
            onto the 8,000-square-foot deck with a retractable roof, one of the
            largest such decks in NYC.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-12 max-lg:flex-col">
        <div className="lg:flex-1 space-y-10">
          <Image
            src={imgVenue2}
            alt="Workshop Attendees"
            className="rounded-3xl w-full h-[400px] object-cover"
          />
        </div>
        <div className="lg:flex-1 space-y-10">
          <Image
            src={imgVenue1}
            alt="Workshop Attendees"
            className="rounded-3xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="text-center">
        <div className="inline-flex flex-col gap-6 md:flex-row items-center">
          <b>Book your hotel room today:</b>
          <div className="space-x-6">
            <Button invert border href={bookingUrl} target="_blank">
              Renaissance New York Midtown Hotel
            </Button>
            {/* <Button
							invert
							border
							href="https://book.passkey.com/gt/220003757?gtid=e4ae3508bb4f3cc4a7a949396ca2cd57"
							target="_blank"
						>
							Hotel Nikko
						</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
