import { useRouter } from 'next/router';

import { Container } from '~/components/Container';
import { PageIntro } from '~/components/PageIntro';
import { SignInForm } from '~/components/SignInForm';

export default function PaymentSuccessPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageIntro title="Thank you!">
        <p>
          Your purchase was successful! Please log in to your account to access
          your content.*
        </p>
      </PageIntro>

      <Container>
        <div className="max-w-prose flex flex-col gap-16">
          <SignInForm
            onSuccess={() => {
              void router.push('/worldsfair/2024/schedule');
            }}
          />

          <p>
            <strong>*</strong>Fulfilling a purchase occasionally takes a few
            minutes. If you have trouble logging in, please wait a while and try
            again. If you continue to have issues, please contact&nbsp;us.
          </p>
        </div>
      </Container>
    </div>
  );
}
