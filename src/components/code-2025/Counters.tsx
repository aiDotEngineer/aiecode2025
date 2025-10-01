import { CountUp } from '~/components/CountUp';

export function Counters() {
  return (
    <div className="flex flex-wrap text-center">
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp start={1000} end={2000} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Founders, VPs of AI & AI Engineers
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={100} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Launches & Talks from top Speakers
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={70} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Practical Workshops & Expo Sessions
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={35} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Top Tools & Employers in Expo
        </b>
      </div>
    </div>
  );
}
