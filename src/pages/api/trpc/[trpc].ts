import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter, createTRPCContext } from '@/server/api/root';

import { env } from '~/env.mjs';

export const maxDuration = 60;

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    // @ts-expect-error env is not defined in the server
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          );
        }
      : undefined,
});
