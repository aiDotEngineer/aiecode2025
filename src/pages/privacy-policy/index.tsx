import type { InferGetServerSidePropsType } from 'next';

import { getSinglePage } from '@pkg/api/src/cms/getSinglePage';

import { Container } from '~/components/Container';
import { MarkdownView } from '~/components/MarkdownView';
import { SubPageWrap } from '~/components/SubPageWrap';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function PrivacyPolicy(props: Props) {
  const { markdown } = props;
  return (
    <SubPageWrap>
      <Container className="mt-32">
        <MarkdownView markdown={markdown} />
      </Container>
    </SubPageWrap>
  );
}

export async function getServerSideProps() {
  const page = await getSinglePage('privacy-policy');

  return {
    props: {
      markdown: page?.attributes.content ?? '',
    },
  };
}
