import { Container } from '~/components/Container';

export function PrimaryFooter({ children }: { children: React.ReactNode }) {
  return (
    <Container as="footer">
      <div className="mb-20 mt-4 flex justify-between gap-x-6 gap-y-4 border-t border-black/10 py-12">
        <div>{children}</div>
        <p className="text-sm text-neutral-700">
          © Software 3.0 Inc {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  );
}
