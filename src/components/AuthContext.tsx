import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';

import { api } from '../support/api';
import { AUTH_TOKEN_KEY } from '../support/constants';

type User = {
  email: string;
  id: string;
  name: string;
};

export type Session = {
  token: string;
  user: User;
};

type AuthState =
  | { state: 'INITIALIZING' }
  | { state: 'INIT_ERROR'; error: Error }
  | { state: 'LOGGED_OUT' }
  | { state: 'LOGGED_IN'; user: User };

type AuthContext = {
  authState: AuthState;
  endSession: () => void;
  refreshSession: () => void;
  setAuthSession: (session: Session | null) => void;
  user: User | null;
};

const Context = createContext<AuthContext | null>(null);

export function AuthProvider(props: { children: ReactNode }) {
  const tokenRef = useRef('');
  const [authState, setAuthState] = useState<AuthState>({
    state: 'LOGGED_OUT',
  });

  // eslint-disable-next-line
  const refetch = () => {
    console.log('refetch triggered');
  };
  // const { refetch } = api.network.getUserByToken.useQuery(
  //   // TODO: Why are we sending token here if it's also in the headers?
  //   { token: tokenRef.current },
  //   {
  //     enabled: authState.state === 'INITIALIZING',
  //     refetchInterval: false,
  //     onError: (error) => {
  //       setAuthState({
  //         state: 'INIT_ERROR',
  //         error: error instanceof Error ? error : new Error(String(error)),
  //       });
  //       // TODO: Retry with exponential backoff?
  //       // setTimeout(() => refetch(), 1500);
  //     },
  //     onSuccess: (user) => {
  //       if (user === null) {
  //         setAuthState({ state: 'LOGGED_OUT' });
  //       } else {
  //         setAuthState({ state: 'LOGGED_IN', user });
  //       }
  //     },
  //   },
  // );

  const setSession = useCallback((session: Session) => {
    const { token, user } = session;

    setAuthToken(token);
    setAuthState({ state: 'LOGGED_IN', user });
  }, []);

  const endSession = useCallback(() => {
    setAuthToken(null);
    setAuthState({ state: 'LOGGED_OUT' });
  }, []);

  const refreshSession = useCallback(() => {
    setAuthState({ state: 'INITIALIZING' });
    void refetch();
  }, [refetch]);

  useEffect(() => {
    // Can't fetch the token until we're on the client and can check the session
    const storedToken = getAuthToken() ?? '';

    if (storedToken) {
      tokenRef.current = storedToken;
      refreshSession();
    }
  }, [refreshSession]);

  const contextValue = useMemo<AuthContext>(
    () => ({
      user: authState.state === 'LOGGED_IN' ? authState.user : null,
      authState,
      endSession,
      setAuthSession: (session) => {
        if (session) { setSession(session) } else {endSession()};
      },
      refreshSession,
    }),
    [authState, endSession, refreshSession, setSession],
  );

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export function useAuth() {
  const context = useContext(Context);
  if (context === null) {
    throw new Error('useAuth must be within AuthProvider');
  }
  return context;
}

function setAuthToken(token: string | null) {
  if (token === null) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  } else {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
}

function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) ?? null;
}
