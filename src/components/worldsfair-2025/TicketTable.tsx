// temporary image instead of html, wasn't enough time to make in html before launch
// import Image from 'next/image';

// import ticketTableMobileImg from '~/images/worldsfair-2025/ticket-table-mobile.png';
// import ticketTableImg from '~/images/worldsfair-2025/ticket-table.png';
import { Button } from '../Button';
import { useWorldsFair2025 } from '../ChoosePrimaryLayout';
import { useTito } from '../../hooks/useTito';

export function TicketTable() {
  const { BUY_TICKETS_URL } = useWorldsFair2025();
  const titoUrl = useTito();

  return (
    <div className="space-y-8">
      <header className="text-center space-y-3 border-b pb-12">
        <h1 className="text-5xl" id="buytix">
          <b>Buy Tickets</b>
        </h1>
        <p className="max-w-5xl m-auto text-gray-on-white mb-4">
          We are going to sell out of Early Bird discounted tickets!
        </p>
        <Button
          href={titoUrl}
          className="block w-52 hover:cursor-not-allowed"
        >
          <span className="">Buy Early Bird Tickets</span>
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
