import { CountUp } from '~/components/CountUp';
import Image from 'next/image';

export function Counters() {
  return (
    <div className="flex flex-wrap text-center">
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp start={1000} end={3000} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Founders, VPs of AI & AI Engineers
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={150} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Launches & Talks from top Speakers
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={100} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Practical Workshops & Expo Sessions
        </b>
      </div>
      <div className="mb-6 w-1/2 xl:w-1/4">
        <b className="block text-5xl">
          ~<CountUp end={50} />
        </b>
        <b className="block text-sm text-gray-on-white">
          Top DevTools & Employers in Expo
        </b>
      </div>
      <div className="w-full text-center">
        <Image
          src="/wf25logowall-landscape.png"
          alt=""
          width={1000}
          height={500}
          className="mx-auto mb-32"
        />
      </div>
    </div>
  );
}
