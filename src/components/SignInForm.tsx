import React from 'react';

import { api } from '~/support/api';
import type { Session } from './AuthContext';
import { useAuth } from './AuthContext';
import { Button } from './Button';
import { FormInput } from './FormInput';

type Step = 'email' | 'otp';

type Props = {
  /**
   * Callback called after the user has successfully signed in
   */
  onSuccess?: () => void;
};

export function SignInForm({ onSuccess }: Props) {
  const [step, setStep] = React.useState<Step>('email');
  const [loginId, setLoginId] = React.useState('');
  const { setAuthSession } = useAuth();

  switch (step) {
    case 'email':
      return (
        <EmailForm
          onSuccess={(id) => {
            setLoginId(id);
            setStep('otp');
          }}
        />
      );

    case 'otp':
      return (
        <OtpForm
          id={loginId}
          onCancel={() => {
            setStep('email');
          }}
          onSuccess={(session) => {
            setAuthSession(session);
            onSuccess?.();
          }}
        />
      );
  }
}

function EmailForm({ onSuccess }: { onSuccess: (id: string) => void }) {
  const [email, setEmail] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const initLoginWeb = () => {
    console.log('initLoginWeb');
  }
  // const initLoginWeb = api.network.initLoginWeb.useMutation({
  //   onError: (error) => {
  //     setErrorMsg(String(error));
  //   },
  //   onSuccess: (result) => {
  //     if (!result.success) {
  //       setErrorMsg(result.errorMessage);
  //       return;
  //     }

  //     onSuccess(result.id);
  //   },
  // });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setErrorMsg('');
        // initLoginWeb.mutate({ email });
      }}
    >
      <FormInput
        errorMessage={errorMsg}
        helperText="Use the email address associated with your ticket"
        id="email"
        label="Email address"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
      />

      <Button type="submit">
        {false ? 'Sending...' : 'Send One-time Password'}
      </Button>
    </form>
  );
}

function OtpForm({
  id,
  onCancel,
  onSuccess,
}: {
  id: string;
  onCancel: () => void;
  onSuccess: (session: Session) => void;
}) {
  const [otp, setOtp] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const completeLogin = () => {
    console.log('completeLogin');
  }
  // const completeLogin = api.network.completeLogin.useMutation({
  //   onError: (error) => {
  //     setErrorMsg(String(error));
  //   },
  //   onSuccess: (result) => {
  //     if (!result.success) {
  //       setErrorMsg(result.errorMessage ?? 'An error occurred');
  //       return;
  //     }

  //     onSuccess(result.session);
  //   },
  // });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // completeLogin.mutate({ code: otp, id });
      }}
    >
      <FormInput
        errorMessage={errorMsg}
        id="otp"
        label="One-time Password"
        helperText="Enter the one-time password from your email"
        onChange={(e) => setOtp(e.target.value)}
        type="text"
        value={otp}
      />

      <div className="grid grid-cols-2 gap-4">
        <Button border invert onClick={onCancel} type="button">
          Cancel
        </Button>

        <Button type="submit">
          {/* {completeLogin.isLoading ? 'Verifying...' : 'Submit'} */}
          {false ? 'Verifying...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}
