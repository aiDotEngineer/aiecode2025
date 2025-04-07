// @ts-nocheck

import { formatSingleDate } from '~/utils/formatSingleDate';
import { Container } from './Container';

export function DateMenu({ selectedDate, onDateClick, dates, children }) {
  return (
    <Container>
      <div className="flex h-[110px] lg:h-[70px] items-center justify-center space-x-5 lg:justify-start flex-wrap">
        {dates.map((date, index) => {
          const currentDate = formatSingleDate(date);

          return (
            <button
              key={index}
              className={`text-normal pr-3 font-display font-semibold text-black md:text-2xl ${
                selectedDate === date
                  ? 'underline'
                  : 'no-underline opacity-60 hover:opacity-100'
              } `}
              onClick={() => onDateClick(date)}
            >
              {currentDate === 'Oct 12' ? 'Remote talks' : currentDate}
            </button>
          );
        })}
        {children}
      </div>
    </Container>
  );
}
