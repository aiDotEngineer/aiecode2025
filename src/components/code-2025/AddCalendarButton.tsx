import type { ComponentProps } from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import { useWorldsFair2025 } from '../ChoosePrimaryLayout';

type Options = Exclude<
  ComponentProps<typeof AddToCalendarButton>['options'],
  undefined
>;

const defaultOptions: Options = ['Google', 'Yahoo', 'Apple', 'Outlook.com'];

export default function AddCalendarButton() {
  const { YOUTUBE_URL, TWITTER_URL, BUY_TICKETS_URL } = useWorldsFair2025();

  const name = "AI Engineer Summit NY 2025r";
  // in description [br] is for <br />
  const description = `Watch the livestream on our YouTube channel (${YOUTUBE_URL}) or purchase tickets to join in person (${BUY_TICKETS_URL}) for the AI Engineer World's Fair! With keynotes from Microsoft, OpenAI, Google, AWS, and more, plus over 100 sessions, there will be plenty of sessions to help you take your engineering team & business to the next level. Follow us on X (${TWITTER_URL}) to get additional updates plus event-day highlights and post-event talk announcements`;
  const options = defaultOptions;
  const startDate = '2025-02-20';
  const endDate = '2025-02-22';

  return (
    <AddToCalendarButton
      styleDark="--btn-background: #000; --btn-text: #fff; --btn-shadow: none"
      lightMode="dark"
      name={name}
      description={description}
      options={options}
      startDate={startDate}
      endDate={endDate}
      timeZone="America/Los_Angeles"
    />
  );
}
