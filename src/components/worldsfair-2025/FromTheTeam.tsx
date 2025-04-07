// import Image from 'next/image';

// import { pickLogos } from '../Logos';

// const logos = pickLogos([
//   'openAI',
//   'amazon',
//   'replit',
//   'anthropic',
//   'github',
//   'vercel',
//   'llamaIndex',
//   'hex',
//   'langChain',
//   'supabase',
//   'datastax',
//   'notion',
// ]);

export function FromTheTeam() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl">
          From the team behind the
          <br />
          <b><a href="/summit/2025" className="text-blue-600 hover:underline hover:text-blue-400">AI Engineer Summit</a></b>
        </h2>
        {/* <p>Where we featured talks & workshops from top companies including:</p> */}
      </div>

      {/* <ul
        role="list"
        className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center gap-x-8 gap-y-10 "
      >
        {logos.map(({ name, black }) => (
          <li key={name}>
            <div className="flex min-h-[70px] flex-col items-center justify-center grayscale">
              <Image src={black ?? ''} alt={name} />
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
