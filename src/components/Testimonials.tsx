 
 
import { useRef } from 'react';
import Image, { type StaticImageData } from 'next/image';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import { FaLinkedin, FaPencilAlt } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

import imageAntWilson from '~/images/avatars/ant-wilson.png';
import imageChaodoze from '~/images/avatars/chaodoze.jpg';
import imageDedyKredo from '~/images/avatars/dedy-kredo.jpg';
import imageEricNess from '~/images/avatars/eric-ness.jpg';
import imageEricRyan from '~/images/avatars/eric-ryan.jpg';
import imageEugeneYan from '~/images/avatars/eugene-yan.jpg';
import imageKaranGanesan from '~/images/avatars/karan-ganesan.jpg';
import imagePedroTabio from '~/images/avatars/pedro-tabio.jpg';
import imageRobertNasuti from '~/images/avatars/robert-nasuti.jpeg';
import imageYanick from '~/images/avatars/yanick.jpg';
import imageYubrew from '~/images/avatars/yubrew.jpg';

type TestimonialType = {
  testimonialType?: 'twitter' | 'linkedin' | 'blog';
  id: string;
  url: string;
  name: string;
  handle?: string;
  message: React.ReactNode;
  image: StaticImageData;
};

type Props = {
  testimonial?: TestimonialType;
  id?: string;
};

export function Testimonial({ testimonial, id }: Props) {
  testimonial = !id ? testimonial : testimonials.find((t) => t.id === id);
  if (!testimonial) return null;

  return (
    <div
      className="rounded-2xl p-6 bg-white w-[372px]"
      role="button"
      onClick={() => {
        window.open(testimonial.url, '_blank');
        // location.href = testimonial.url;
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width="50"
            height="50"
            className="rounded-full object-contain"
          />
          <div className="flex-1 text-xs">
            <b>{testimonial.name}</b>
            {testimonial.handle && <div>@{testimonial.handle}</div>}
          </div>
        </div>
        <div>
          {testimonial.testimonialType === 'twitter' && (
            <RiTwitterXFill className="text-2xl" />
          )}
          {testimonial.testimonialType === 'linkedin' && (
            <FaLinkedin className="text-2xl" />
          )}
          {testimonial.testimonialType === 'blog' && (
            <FaPencilAlt className="text-2xl" />
          )}
        </div>
      </div>
      <div className="mt-4 line-clamp-6">{testimonial.message}</div>
    </div>
  );
}

function ScrollingTestimonials() {
  return (
    <>
      {testimonials.map((t) => (
        <Testimonial key={t.id} id={t.id} />
      ))}
    </>
  );
}

export function TestimonialCarousel() {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref);

  // The .infinite-carousel animation needs the scrolling list twice
  return (
    <div
      ref={ref}
      className={clsx('infinite-carousel', {
        'infinite-carousel-play': isInView,
      })}
    >
      <div>
        <ScrollingTestimonials />
      </div>
      <div aria-hidden="true">
        <ScrollingTestimonials />
      </div>
    </div>
  );
}

/****************************************
  Tweets
*****************************************/

// Collect Tweets
export const testimonials: TestimonialType[] = [];

function L({ children }: { children: React.ReactNode }) {
  // Fake Link, just to make them blue. They're not clickable anyways
  return <span className="text-cyan-500">{children}</span>;
}

testimonials.push({
  id: '1712241333832982620',
  testimonialType: 'twitter',
  url: 'https://twitter.com/ericwryan/status/1712241333832982620',
  name: 'Eric Ryan',
  handle: 'ericwryan',
  image: imageEricRyan,
  message: (
    <>
      Thrilled by the energy this wk at the <L>@aiDotEngineer</L> summit 🚀
      Reminds me of the vibrant spirit at Twitter's first dev conference, Chirp.
      Was the spark at the beginning a decade of innovation for many. Kudos to{' '}
      <L>@swyx</L> and
      <L>@Benghamine</L> for hosting a fantastic gathering. <L>#AIESummit</L>
    </>
  ),
});

testimonials.push({
  id: '1711973967152681185',
  testimonialType: 'twitter',
  url: 'https://twitter.com/DedyKredo/status/1711973967152681185',
  name: 'Dedy Kredo',
  handle: 'DedyKredo',
  image: imageDedyKredo,
  message: (
    <>
      <L>@aiDotEngineer</L> was by far the best conference I've ever attended. A
      huge shoutout to <L>@swyx</L> and <L>@Benghamine</L> for putting together
      this event! Link to my talk about Code Integrity and <L>@CodiumAI</L>{' '}
      (starts at minute 25:30)
    </>
  ),
});

testimonials.push({
  id: '1712141152785441177',
  testimonialType: 'twitter',
  url: 'https://twitter.com/pedrotabio/status/1712141152785441177',
  name: 'Pedro Tabio',
  handle: 'pedrotabio',
  image: imagePedroTabio,
  message: (
    <>
      The <L>@aiDotEngineer</L> Summit was one of the highest signal-to-noise
      ratio conferences I've ever been to. Deeply technical but accessible, and
      truly at the bleeding edge. thank you <L>@swyx</L> and <L>@Benghamine</L>{' '}
      for putting it together - and looking forward to the next one!
    </>
  ),
});

testimonials.push({
  id: '1711941272469213335',
  testimonialType: 'twitter',
  url: 'https://twitter.com/eugeneyan/status/1711941272469213335',
  name: 'Eugene Yan',
  handle: 'eugeneyan',
  image: imageEugeneYan,
  message: (
    <>
      The production value for <L>@aiDotEngineer</L> was so high—they had an
      entire SWAT team backstage (see last third of this video)
    </>
  ),
});

testimonials.push({
  id: '1712683517468135872',
  testimonialType: 'twitter',
  url: 'https://twitter.com/yanicksthoughts/status/1712683517468135872',
  name: 'Yanick J. S.',
  handle: 'yanicksthoughts',
  image: imageYanick,
  message: (
    <>
      The <L>@aiDotEngineer</L> Summit was the most insightful and exciting
      conference I ever attended:
      <br />- Top-notch crowd of builders, AI engineers, AI ecosystem players.
      Every conversation I had was insightful.
      <br />- Main conference was preceded by full-day AI 101/201 workshops to
      help new entrants like myself catch up.
      <br />- HQ keynotes & workshops that brought you to the cutting edge
      across all areas of AI Engineering (AI Eng stack, emerging AI application
      design patterns, AI UX, Agents, ....)
      <br />
      <br />
      This is a burgeoning community that you shouldn't sleep on.
      <br />
      <br />
      They're doing a bigger event in Spring 2024 - if you're building with AI I
      highly recommend you join me in attending.
    </>
  ),
});

testimonials.push({
  id: '1712800782582460707',
  testimonialType: 'twitter',
  url: 'https://twitter.com/yubrew/status/1712800782582460707',
  name: 'Yubrew',
  handle: 'yubrew',
  image: imageYubrew,
  message: (
    <>
      Speedrunning through <L>@aiDotEngineer</L> talks the next few days. Every
      talk was months of effort distilled into 20min - 1 hr. Ridiculous return
      on time.
    </>
  ),
});

testimonials.push({
  id: '7117975761537400833',
  testimonialType: 'linkedin',
  url: 'https://www.linkedin.com/feed/update/urn:li:activity:7117975761537400833',
  name: 'Robert Nasuti',
  image: imageRobertNasuti,
  message: (
    <>
      The first day of workshops and keynote talks at the{' '}
      <L>AI Engineer Summit</L>
      were fantastic. The workshops were very informative and I'm especially
      enjoying all the focus on the importance of evals.
      <br />
      <br />
      On to day 2 and eagerly anticipating even more insights!
    </>
  ),
});

testimonials.push({
  id: '1711904402498359714',
  testimonialType: 'twitter',
  url: 'https://twitter.com/AntWilson/status/1711904402498359714',
  name: 'Ant Wilson — e/postgres',
  handle: 'AntWilson',
  image: imageAntWilson,
  message: (
    <>
      <L>#AIEngineer</L> was such a high signal event, <L>@Benghamine</L> and{' '}
      <L>@swyx</L> did a hell of a job 👏
    </>
  ),
});

testimonials.push({
  id: '1712906560601837917',
  testimonialType: 'twitter',
  url: 'https://twitter.com/chaodoze/status/1712906560601837917',
  name: 'chaodoze',
  handle: 'chaodoze',
  image: imageChaodoze,
  message: (
    <>
      <L>#AIESummit</L> may well be the best conference I've attended in ages.
      And yes, I do feel a little less bewildered and more illuminated after the
      conference 🙏🏼 <L>@swyx</L> & <L>@Benghamine</L>
    </>
  ),
});

testimonials.push({
  id: '1711885502348157410',
  testimonialType: 'twitter',
  url: 'https://twitter.com/karanganesan/status/1711885502348157410',
  name: 'Karan Ganesan',
  handle: 'karanganesan',
  image: imageKaranGanesan,
  message: (
    <>
      possibly one of the best ai conference of 2023 ❤️ <L>#aiesummit</L>
    </>
  ),
});

testimonials.push({
  id: '@eric.christopher.ness/ai-engineer-summit-45ac40679d18',
  testimonialType: 'blog',
  url: 'https://medium.com/@eric.christopher.ness/ai-engineer-summit-45ac40679d18',
  name: 'Eric Ness',
  image: imageEricNess,
  message: (
    <>
      If I had to describe the vibe at AI Engineer Summit in one word that word
      would be "excitement". Everywhere I could hear the loud buzz of
      conversations happening up-close and at-tempo. Everyone I talked to sees
      the massive growth in capabilities and tooling in the last year and was
      hopeful about what the future will bring.
    </>
  ),
});
