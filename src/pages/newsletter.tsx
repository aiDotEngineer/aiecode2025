import { NewsletterBullets, NewsletterFormOne } from '~/components/Newsletter';
import background from '~/images/worldsfair-2024/hero-newsletter.jpg';

export default function Newsletter() {
  return (
    
    <div
      className="pt-48 pb-20 px-6 md:px-12 bg-cover"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div
        className="mx-auto bg-white rounded-2xl p-10 space-y-5"
        style={{ maxWidth: `640px` }}
      >
        <h1 className="text-center text-4xl font-bold">Join the AI.Engineer Newsletter</h1>
        <p className="text-center">
          Be first to know when new conferences and talks are up! 
          Stay informed with exclusive content, valuable insights, and the
          latest happenings from around the industry, all curated just for you.
        </p>
        <NewsletterFormOne />
        <hr />
        <NewsletterBullets />
      </div>
    </div>
  );
}
