import React from 'react';
import { useRouter } from 'next/router';

import { Container } from '~/components/Container';
import { PageIntro } from '~/components/PageIntro';
import { SignInForm } from '~/components/SignInForm';

export default function SignInPage() {
  const router = useRouter();

  /**
   * Let's redirect the user back to the homepage after they've signed in
   */
  const handleSigninSuccess = React.useCallback(() => {
    void router.push('/');
  }, [router]);

  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageIntro title="Sign In">
        <p>
          Attendees of our events can gain access to gated content, such as
          early access to session videos, and more.
        </p>
      </PageIntro>

      <Container>
        <div className="max-w-prose">
          <SignInForm onSuccess={handleSigninSuccess} />
        </div>
      </Container>
    </div>
  );
}
