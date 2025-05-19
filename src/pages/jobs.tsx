import { Container } from "~/components/Container";
import { PageIntro } from "~/components/PageIntro";

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageIntro title="Jobs">
        <p>Jobs coming soon...</p>
      </PageIntro>

      <Container>
        <div className="max-w-prose">
          {/* Content will go here */}
        </div>
      </Container>
    </div>
  );
} 