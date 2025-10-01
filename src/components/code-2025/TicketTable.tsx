// temporary image instead of html, wasn't enough time to make in html before launch
// import Image from 'next/image';

// import ticketTableMobileImg from '~/images/worldsfair-2024/ticket-table-mobile.png';
// import ticketTableImg from '~/images/worldsfair-2024/ticket-table.png';
import { Button } from '../Button';
import { useWorldsFair2025 } from '../ChoosePrimaryLayout';

export function TicketTable() {
  const { BUY_TICKETS_URL } = useWorldsFair2025();

  return (
    <div className="space-y-8">
      <header className="text-center space-y-3 border-b pb-12">
        <h1 className="text-5xl" id="buytix">
          <b>Buy AI Engineer Summit 2025 Tickets</b>
        </h1>
        {/* <p className="max-w-5xl m-auto text-gray-on-white">
					We have now sold out of Early Bird tickets; General Admission has also
					sold out.
					<br /> Please join us online for the free livestream.
				</p> */}
        <Button href={BUY_TICKETS_URL} className="block w-52">
          By invitation only. 
          <br /> 
          <br /> 
          Apply here.
          {/* <span className="line-through">Buy Tickets</span> SOLD OUT! */}
        </Button>
      </header>
      <div className="space-y-6">
        {/* <p className="text-gray-on-white">
          Pricing is currently in{' '}
          <b>Early Bird - PRICES GO UP BY $100 ON JUNE 5</b>
        </p> */}
        {/* We'll do real HTML and responsiveness later */}
        {/* <Image className="md:hidden" src={ticketTableMobileImg} alt="tickets" />
        <Image className="max-md:hidden" src={ticketTableImg} alt="tickets" />
        <p className="text-gray-on-white">
          * Expo sessions include talks, workshops, and facilitated discussions
          led by expo partners and organizer-curated speakers in the Expo Arena
          breakout rooms
        </p> */}
      </div>
    </div>
  );
}
