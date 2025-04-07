import { createClient } from '@supabase/supabase-js';

import { env } from '../env.mjs';

/**
 * Initialize Supabase client for interacting with Vector Store.
 */
export const supabaseClient = createClient(
  // @ts-expect-error env is not defined in the server
  env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  // @ts-expect-error env is not defined in the server
  env.SUPABASE_SERVICE_ROLE_KEY ?? '',
);
