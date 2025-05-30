# AIEWF 2025 page

- todos from the migration from old monorepo to this
    - Header.tsx: fill in Speakers, Workshops and Schedule (on the mobile menu as well)
    - fix signin
        - const { refetch } = api.network.getUserByToken.useQuery
        - const initLoginWeb = api.network.initLoginWeb.useMutation({
            - initLoginWeb.isLoading and initLoginWeb.mutate
        - const completeLogin = api.network.completeLogin.useMutation({
            - completeLogin.mutate({ code: otp, id }); and isLoading
    - fix CMS related things
        - import type { Session } from '@pkg/api/src/cms/getSession';
        - import type { Presenter } from '@pkg/api/src/cms2/types';
        - import type { Session } from '@pkg/api/src/cms/getSession';
        - import type { Photo } from '@pkg/api/src/cms/types';
        - import type { SessionEvent } from '@pkg/api/src/cms2/schedule';

- hygiene
    - re enamble @typescript-eslint/no-unused-vars
    - SessionImageGrid {images.map((image: any, index: number) => {


- deployment
    - LOOPS_API_KEY
    - NEXT_PUBLIC_SUPABASE_URL
    - SUPABASE_SERVICE_ROLE_KEY
    - PCC_API_KEY= ask jon from daily or swyx
    - PCC_API_URL="https://api.pipecat.daily.co/v1/public/ai-wf-bot/start"
    - env.NODE_ENV === 'development'