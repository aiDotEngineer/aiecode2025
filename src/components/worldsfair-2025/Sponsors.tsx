import { Logo } from '../Logos';

export function Sponsors() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Sponsors</h1>
        <p className="max-w-2xl text-gray-on-white">
          We've carefully curated a sponsor expo & non-exhibiting sponsors who
          are relevant, interesting, and pushing the boundaries of the AI
          Engineering ecosystem. These are the companies that are building &
          innovating with AI — from Devtools & Infra to Vector DBs & Open
          Models. Learn more about each of the companies by clicking on their
          logo below, and meet & discuss with their founders & engineering
          representatives at the summit to learn how they can help you take your
          company, product, and internal processes to unparalleled heights.
        </p>
      </header>

      <div className="text-center space-y-6 p-8 bg-stone-100 rounded-2xl">
        <p className="text-xl">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">CLOSING SOON</span>
        </p>
        <p className="text-gray-700">
          To learn more about sponsorship opportunities for World's Fair 2025, please email{' '}
          <a href="mailto:sponsors@ai.engineer" className="text-blue-500 hover:text-blue-400">
            sponsors@ai.engineer
          </a>
        </p>
        <p className="text-gray-600">
          You can view our previous supporters at:{' '}
          <a href="/worldsfair/2024" className="text-blue-500 hover:text-blue-400">
            World's Fair 2024
          </a>
          {' '}and{' '}
          <a href="/summit/2025" className="text-blue-500 hover:text-blue-400">
            Summit 2025
          </a>
        </p>
      </div>

    </div>
  );
}

